// TEMPORARY STATIC DATA — the admin dashboard will replace this with a database
// query (latest published setlist). Keep the shape below the same when you swap it,
// so components/Setlist.tsx does not need to change.

export interface SetlistSong {
  id: string
  cat: string // "Medley" | "Worship" | ...
  title: string
  artist: string
  spotifyUrl?: string // full link to the track on Spotify
}

export interface Setlist {
  date: string // shown in the pill, e.g. "18 May 2026"
  songs: SetlistSong[]
}

export const currentSetlist: Setlist = {
  date: '18 May 2026',
  songs: [
    { id: 's1', cat: 'Medley',  title: 'Atmosphere Shift',     artist: 'Phil Thompson' },
    { id: 's2', cat: 'Medley',  title: 'Spirit Break Out',      artist: 'William McDowell' },
    { id: 's3', cat: 'Medley',  title: 'Holy Spirit',           artist: 'Greatman Takit' },
    { id: 's4', cat: 'Worship', title: 'Mighty Name of Jesus',  artist: 'The Belonging Co.' },
    { id: 's5', cat: 'Worship', title: 'What a Beautiful Name', artist: 'Hillsong Worship' },
    { id: 's6', cat: 'Worship', title: 'I Speak Jesus',         artist: 'Charity Gayle' },
    { id: 's7', cat: 'Worship', title: 'Victory Is Yours',      artist: 'Bethel Music' },
  ],
}

// Uses the exact track link when one is set; otherwise opens a Spotify search for the song,
// so every "Listen" button works even before real track links are added.
export function getSpotifyUrl(song: SetlistSong): string {
  if (song.spotifyUrl) return song.spotifyUrl
  return `https://open.spotify.com/search/${encodeURIComponent(`${song.title} ${song.artist}`)}`
}

// Turns a Spotify track link into the URL Spotify's embedded player needs.
// Accepts links like https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC?si=abc
// Returns null when there is no link (or it is not a track/album/playlist link).
export function getEmbedUrl(song: SetlistSong): string | null {
  if (!song.spotifyUrl) return null
  const match = song.spotifyUrl.match(
    /open\.spotify\.com\/(?:intl-[a-z]+\/)?(track|album|playlist)\/([A-Za-z0-9]+)/,
  )
  if (!match) return null
  return `https://open.spotify.com/embed/${match[1]}/${match[2]}?utm_source=generator&theme=0`
}