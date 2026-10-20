import { FaBriefcase } from 'react-icons/fa'
import { VideoButton, PageHeading, DatePill, MetaLine, TimelineItem, TwoTone } from '../components/ui'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <>
      <PageHeading sub="Summary of my" accent="Work" rest="Experience" />
      <div className="px-[4.125rem] pb-12 pt-12">
        {experience.map((e, i) => (
          <TimelineItem key={e.title} last={i === experience.length - 1} size={120}
            node={<div className="w-[7.5rem] aspect-square rounded-full bg-[#0585c9] ring-[0.5rem] ring-page/50 flex items-center justify-center text-white text-[4rem] shrink-0"><FaBriefcase /></div>}>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
              <h3 className="flex-1 min-w-0 font-head font-bold text-[2rem] leading-snug"><TwoTone text={e.title} /></h3>
              <DatePill from={e.from} to={e.to} />
            </div>
            <MetaLine>{e.org} – {e.place}</MetaLine>
            <ul className="list-disc pl-6 mt-6 space-y-1 text-[1.1875rem] leading-relaxed marker:text-ink">
              {e.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <div className="flex flex-wrap gap-3 mt-6">
              {e.tags.map((t) => <span key={t} className="bg-accent text-onaccent rounded-md px-3.5 py-1.5 text-[1.0625rem]">{t}</span>)}
            </div>
            <VideoButton video={e.video} />
          </TimelineItem>
        ))}
      </div>
    </>
  )
}
