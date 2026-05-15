const BASE = [
  'Worship', 'Fellowship', 'Bible Study', 'Community',
  'Prayer', 'Zoomers Bible', 'Outreach',
]

// 4 copies so translateX(-25%) = exactly one base set — guarantees seamless loop
// with no viewport-width-dependent gaps
const ITEMS = [...BASE, ...BASE, ...BASE, ...BASE]

export default function MarqueeSection() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {ITEMS.map((item, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__sep" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
