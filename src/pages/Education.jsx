import { useState } from 'react'
import { FaRegBuilding, FaRegFlag } from 'react-icons/fa'
import { VideoButton } from '../components/ui'
import { PageHeading, Tabs, DatePill, TimelineItem, TwoTone } from '../components/ui'
import { education, educationTabs } from '../data/content'

export default function Education() {
  const [tab, setTab] = useState('All')
  const tabs = ['All', ...educationTabs]
  const count = (t) => (t === 'All' ? education.length : education.filter((e) => e.type === t).length)
  const items = tab === 'All' ? education : education.filter((e) => e.type === tab)

  return (
    <>
      <PageHeading sub="This is my" accent="Education" rest="Background" />
      <div className="px-[4.125rem] pb-12">
        <Tabs tabs={tabs.map((t) => `${t} (${count(t)})`)} value={`${tab} (${count(tab)})`} onChange={(v) => setTab(v.replace(/ \(\d+\)$/, ''))} />
        {items.map((e, i) => (
          <TimelineItem key={e.id} last={i === items.length - 1} size={120}
            node={<div className="w-[7.5rem] aspect-square rounded-full bg-card ring-[0.5rem] ring-page/50 flex items-center justify-center font-head font-bold text-accent text-[2rem] shrink-0 overflow-hidden border-4 border-line">{e.logo ? <img src={e.logo} alt="" className="w-full h-full object-cover" /> : e.initials}</div>}>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <h3 className="flex-1 min-w-0 font-head font-bold text-[1.875rem] leading-snug"><TwoTone text={e.title} /></h3>
              {(e.from || e.year) && <DatePill from={e.from || e.year} to={e.to} />}
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-mute text-[1.0625rem] mt-3">
              <span className="flex items-center gap-2"><FaRegBuilding />{e.org}</span>
              {e.place && <><span>·</span><span className="flex items-center gap-2"><FaRegFlag />{e.place}</span></>}
            </div>
            {e.intro && <p className="mt-6 text-[1.1875rem] leading-[1.6]">{e.intro}</p>}
            {e.bullets?.length > 0 && (
              <ul className="list-disc pl-6 mt-4 space-y-1 text-[1.1875rem] leading-relaxed marker:text-ink">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            )}
            {e.tags?.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6">
                {e.tags.map((t) => <span key={t} className="bg-accent text-onaccent rounded-md px-3.5 py-1.5 text-[1.0625rem]">{t}</span>)}
              </div>
            )}
            <VideoButton video={e.video} />
          </TimelineItem>
        ))}
      </div>
    </>
  )
}
