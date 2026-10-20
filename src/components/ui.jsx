import { FaCubes, FaRegCalendar, FaRegFlag, FaPlay } from 'react-icons/fa'

// Section heading: grey icon + sub line, big title (cyan words + white words)
export function PageHeading({ sub, accent, rest, accentFirst = true }) {
  return (
    <div className="text-center pt-[4.5rem] pb-2 relative z-10">
      <div className="font-head text-mute/80 text-[1.75rem] flex items-center justify-center gap-3 font-medium">
        <FaCubes className="text-[1.1em]" /> {sub}
      </div>
      <h1 className="font-head font-bold text-[3.125rem] leading-tight mt-2">
        {accentFirst ? (<><span className="text-accent">{accent}</span> {rest}</>) : (<>{rest} <span className="text-accent">{accent}</span></>)}
      </h1>
    </div>
  )
}

// Sub-section title with cyan left bar
export function SectionTitle({ children, accent }) {
  return (
    <div className="flex items-center gap-4 border-l-4 border-accent pl-4 my-10 h-9">
      <h2 className="font-head font-bold text-[2rem]">
        {children} <span className="text-accent">{accent}</span>
      </h2>
    </div>
  )
}

export function Tabs({ tabs, value, onChange }) {
  return (
    <div className="flex justify-center my-10">
      <div className="flex flex-wrap bg-inner/60 rounded-xl overflow-hidden max-w-full">
        {tabs.map((t) => (
          <button key={t} onClick={() => onChange(t)}
            className={`px-5 sm:px-8 h-[2.625rem] text-[1.0625rem] sm:text-[1.1875rem] transition-colors ${value === t ? 'bg-accent text-onaccent rounded-xl' : 'hover:text-accent'}`}>
            {t}
          </button>
        ))}
      </div>
    </div>
  )
}

export function DatePill({ from, to }) {
  return (
    <div className="inline-flex items-center gap-3 bg-page/80 border border-line rounded-full px-6 h-[2.875rem] text-[1rem] whitespace-nowrap self-start shrink-0">
      <FaRegCalendar className="text-[0.9375rem]" />
      <b className="font-semibold">{from}</b>
      {to && <><span>→</span><b className="font-semibold">{to}</b></>}
    </div>
  )
}

export function MetaLine({ children }) {
  return <div className="flex items-center gap-2 text-mute text-[1.0625rem] mt-2"><FaRegFlag className="text-[0.875rem]" />{children}</div>
}

// Splits a title so the first word is cyan (like "Python for Beginners")
export function TwoTone({ text, hl }) {
  if (hl && text.includes(hl)) {
    const [a, b] = text.split(hl)
    return <>{a}<span className="text-accent">{hl}</span>{b}</>
  }
  const [first, ...rest] = text.split(' ')
  return <><span className="text-accent">{first}</span> {rest.join(' ')}</>
}

// Vertical timeline row: node on the left, card on the right
export function TimelineItem({ node, children, last, size = 120 }) {
  return (
    <div className="relative flex gap-4 sm:gap-8 pb-10" style={{ '--node': `${size / 16}rem` }}>
      {!last && <div className="absolute w-2 bg-inner/90 rounded" style={{ left: `calc(${size}px / 2 - 0.25rem)`, top: size, bottom: 0 }} />}
      <div className="flex-none flex justify-center items-start" style={{ width: `${size / 16}rem` }}>{node}</div>
      <div className="flex-1 min-w-0 bg-inner/80 rounded-2xl p-5 sm:p-10">{children}</div>
    </div>
  )
}

// Opens the "Get to know more" video dialog. Renders nothing unless an item has a `video` ({ url, text }) in content.js
export function VideoButton({ video }) {
  if (!video?.url) return null
  return (
    <button onClick={() => window.dispatchEvent(new CustomEvent('open-video', { detail: video }))}
      className="mt-6 inline-flex items-center gap-3 bg-accent text-onaccent rounded-full px-6 h-[2.9rem] text-[1.1rem] hover:brightness-110 transition">
      <FaPlay className="text-[0.9rem]" /> Get to know more
    </button>
  )
}
