import React from "react";
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { VideoButton, PageHeading, Tabs } from '../components/ui'
import { getIcon } from '../components/icons'
import { projects, projectTabs } from '../data/content'

export default function Portfolio() {
  const [tab, setTab] = useState('All')
  const tabs = ['All', ...projectTabs]
  const count = (t) => (t === 'All' ? projects.length : projects.filter((x) => x.cat === t).length)
  const items = tab === 'All' ? projects : projects.filter((x) => x.cat === tab)

  return (
    <>
      <PageHeading sub="Take a look at" accent="Projects" rest="My" accentFirst={false} />
      <div className="px-[4.125rem] pb-12">
        <Tabs tabs={tabs.map((t) => `${t} (${count(t)})`)} value={`${tab} (${count(tab)})`} onChange={(v) => setTab(v.replace(/ \(\d+\)$/, ''))} />
        <div className="grid xl:grid-cols-2 gap-6 mt-14">
          {items.map((p) => {
            const Icon = getIcon(p.icon)
            return (
              <article key={p.title} className="relative bg-inner/80 rounded-2xl p-[2.25rem] pb-8 flex flex-col">
                <div className="absolute -top-[0.625rem] right-[-0.375rem] w-[6.875rem] h-[6.875rem] rounded-full bg-gradient-to-br from-[#1ea0f0] to-[#0a62c4] border-[0.3125rem] border-white/90 flex items-center justify-center text-white text-[2.75rem] max-sm:w-[4.75rem] max-sm:h-[4.75rem] max-sm:text-[1.875rem]">
                  <Icon />
                </div>
                <h3 className="font-head font-bold text-accent text-[1.875rem] leading-tight pr-[6.875rem] max-sm:pr-[4.375rem]">{p.title}</h3>
                <div className="text-mute text-[1.125rem] mt-3">{p.cat}</div>
                <div className="flex flex-wrap gap-2.5 mt-4">
                  {p.tags.map((t) => <span key={t} className="bg-page/80 rounded-lg px-3.5 py-1.5 text-[1rem]">{t}</span>)}
                </div>
                <p className="text-[1.1875rem] leading-[1.6] mt-6 flex-1">{p.desc}</p>
                <div className="flex items-center gap-3 mt-8">
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live demo" className="w-14 h-14 rounded-full bg-page/80 flex items-center justify-center text-[1.375rem] hover:bg-accent hover:text-onaccent transition"><FaExternalLinkAlt /></a>}
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="w-14 h-14 rounded-full bg-page/80 flex items-center justify-center text-[1.625rem] hover:bg-accent hover:text-onaccent transition"><FaGithub /></a>}
                </div>
              <VideoButton video={p.video} />
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}
