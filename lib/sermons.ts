import { XMLParser } from 'fast-xml-parser'

// The XpressionHouse podcast is hosted on RSS.com (show slug: "xpressionhouse").
// RSS.com feeds normally live at the URL below. If it ever 404s, open the show
// on rss.com, click "RSS feed", and put the real URL in SERMON_RSS_URL (.env.local / Vercel).
const FEED_URL =
  process.env.SERMON_RSS_URL ?? 'https://media.rss.com/xpressionhouse/feed.xml'

export const SPOTIFY_SHOW_ID = '2LjVOPtqe3B97qyQARMK8g'
export const SPOTIFY_SHOW_URL = `https://open.spotify.com/show/${SPOTIFY_SHOW_ID}`

export interface Sermon {
  id: string
  title: string
  description: string
  date: string // ISO string, safe to pass to client components
  duration: string // e.g. "1:43:39"
  audioUrl: string
  image: string | null
  season: number | null
  episode: number | null
}

// Shape of a single <item> as returned by fast-xml-parser.
// Values are loosely typed because the parser may return strings, numbers or objects.
interface RssItem {
  title?: unknown
  description?: unknown
  pubDate?: string
  guid?: string | number | { '#text'?: string | number }
  enclosure?: { '@_url'?: string }
  'itunes:summary'?: unknown
  'itunes:duration'?: string | number
  'itunes:image'?: { '@_href'?: string }
  'itunes:season'?: unknown
  'itunes:episode'?: unknown
}

function stripHtml(input: unknown): string {
  return String(input ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

// iTunes duration can be "5619" (seconds) or "01:33:39" / "33:39"
function formatDuration(raw: unknown): string {
  if (raw === undefined || raw === null || raw === '') return ''
  const value = String(raw).trim()
  if (value.includes(':')) {
    const parts = value.split(':').map((p) => parseInt(p, 10) || 0)
    const [h, m, s] = parts.length === 3 ? parts : [0, parts[0], parts[1]]
    return h > 0
      ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
      : `${m}:${String(s).padStart(2, '0')}`
  }
  const total = parseInt(value, 10)
  if (Number.isNaN(total)) return ''
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const s = total % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    : `${m}:${String(s).padStart(2, '0')}`
}

function toNumber(value: unknown): number | null {
  const n = parseInt(String(value ?? ''), 10)
  return Number.isNaN(n) ? null : n
}

/**
 * Returns sermons newest-first, or null if the feed could not be loaded
 * (so the page can fall back to the Spotify embed instead of crashing).
 */
export async function getSermons(): Promise<Sermon[] | null> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 1800 } }) // refresh every 30 minutes
    if (!res.ok) return null

    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' })
    const parsed = parser.parse(xml)

    const channel = parsed?.rss?.channel
    if (!channel) return null

    const rawItems: RssItem[] = Array.isArray(channel.item)
      ? channel.item
      : channel.item
        ? [channel.item]
        : []

    const sermons: Sermon[] = rawItems
      .map((item, index): Sermon | null => {
        const audioUrl = item?.enclosure?.['@_url']
        if (!audioUrl) return null

        const guid = typeof item.guid === 'object' ? item.guid['#text'] : item.guid
        const parsedDate = new Date(item.pubDate ?? '')

        return {
          id: String(guid ?? `${index}-${item.title}`),
          title: stripHtml(item.title),
          description: stripHtml(item['itunes:summary'] ?? item.description),
          date: Number.isNaN(parsedDate.getTime()) ? '' : parsedDate.toISOString(),
          duration: formatDuration(item['itunes:duration']),
          audioUrl,
          image: item['itunes:image']?.['@_href'] ?? channel['itunes:image']?.['@_href'] ?? null,
          season: toNumber(item['itunes:season']),
          episode: toNumber(item['itunes:episode']),
        }
      })
      .filter((s: Sermon | null): s is Sermon => s !== null)

    return sermons.sort((a, b) => (a.date < b.date ? 1 : -1))
  } catch {
    return null
  }
}

// ─── Helpers used by the homepage "Latest sermon" section ───

export interface SermonSeries {
  name: string
  part: number
  count: number // messages found in the feed for this series
}

export interface LatestSermonPayload {
  sermon: Sermon
  scripture: string | null
  series: SermonSeries | null
}

// Titles look like "The Power of Covenant Pt. 4" — pull out the series name and part number
function parseSeriesTitle(title: string): { name: string; part: number } | null {
  const match = title.match(/^(.*?)[\s:\u2013-]*(?:pt\.?|part)\s*(\d+)/i)
  if (!match || !match[1].trim()) return null
  return { name: match[1].trim(), part: parseInt(match[2], 10) }
}

// Finds a Bible reference like "2 Cor. 4:7" or "Romans 8:28-30" in the title/description
function extractScripture(text: string): string | null {
  const match = text.match(/\b(?:[1-3]\s)?[A-Z][a-z]{2,}\.?\s\d{1,3}:\d{1,3}(?:[-\u2013]\d{1,3})?/)
  return match ? match[0] : null
}

export async function getLatestSermon(): Promise<LatestSermonPayload | null> {
  const sermons = await getSermons()
  if (!sermons || sermons.length === 0) return null

  const sermon = sermons[0]
  const parsed = parseSeriesTitle(sermon.title)
  const series: SermonSeries | null = parsed
    ? {
        name: parsed.name,
        part: parsed.part,
        count: sermons.filter(
          (s) => parseSeriesTitle(s.title)?.name.toLowerCase() === parsed.name.toLowerCase(),
        ).length,
      }
    : null

  return {
    sermon,
    scripture: extractScripture(`${sermon.title} ${sermon.description}`),
    series,
  }
}