import React from "react";
import { useEffect, useState } from 'react'
import { PageHeading, SectionTitle, DatePill, MetaLine, TimelineItem, TwoTone } from '../components/ui'
import { getIcon } from '../components/icons'
import { counters, lifeUpdates } from '../data/content'

export default function Updates() {
  const [i, setI] = useState(0)
  const n = counters.length
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 3500)
    return () => clearInterval(t)
  }, [n])
  const visible = [0, 1, 2].map((k) => counters[(i + k) % n])

  return (
    <>
      <PageHeading sub="Take a look at my" accent="Updates" rest="Recent" accentFirst={false} />
      <div className="px-[4.125rem] pb-12">
        <div className="grid grid-cols-3 gap-4 mt-14 text-center">
          {visible.map((c) => {
            const Icon = getIcon(c.icon)
            return (
              <div key={c.label} className="fade-in flex flex-col items-center">
                <div className="w-[10.125rem] aspect-square rounded-full bg-[#efefef] text-[#14171c] flex items-center justify-center text-[4.75rem]"><Icon /></div>
                <div className="font-head font-bold text-accent text-[1.875rem] mt-5">{c.n}</div>
                <div className="text-[1.25rem] mt-1">{c.label}</div>
              </div>
            )
          })}
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {counters.map((_, k) => (
            <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)}
              className={`h-[0.4375rem] rounded-full transition-all ${k === i ? 'w-[2.125rem] bg-accent' : 'w-[1.625rem] bg-line'}`} />
          ))}
        </div>

        <SectionTitle accent="Updates">Life</SectionTitle>
        <div className="mt-6">
          {lifeUpdates.map((u, k) => (
            <TimelineItem key={u.title} size={44} last={k === lifeUpdates.length - 1}
              node={<div className="w-[2.75rem] h-[2.75rem] rounded-full bg-[#efefef] ring-[0.4375rem] ring-card shrink-0" />}>
              <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                <h3 className="flex-1 min-w-0 font-head font-bold text-[1.875rem] leading-snug"><span><TwoTone text={u.title} hl={u.hl} /></span></h3>
                <DatePill from={u.date} />
              </div>
              <MetaLine>{u.place}</MetaLine>
              <p className="mt-5 text-[1.1875rem] leading-relaxed">{u.text}</p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </>
  )
}
