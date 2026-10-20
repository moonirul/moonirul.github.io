import React from "react";
import { useState } from 'react'
import { PageHeading, Tabs } from '../components/ui'
import { getIcon } from '../components/icons'
import { techStack, techTabs } from '../data/content'

export default function TechStack() {
  const [tab, setTab] = useState('All')
  const tabs = ['All', ...techTabs]
  const count = (t) => (t === 'All' ? techStack.length : techStack.filter((x) => x.cat === t).length)
  const items = tab === 'All' ? techStack : techStack.filter((x) => x.cat === tab)

  return (
    <>
      <PageHeading sub="Explore" accent="Tech Stack" rest="My" accentFirst={false} />
      <div className="px-[4.125rem] pb-12">
        <Tabs tabs={tabs.map((t) => `${t} (${count(t)})`)} value={`${tab} (${count(tab)})`} onChange={(v) => setTab(v.replace(/ \(\d+\)$/, ''))} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[0.875rem]">
          {items.map((t) => {
            const Icon = getIcon(t.icon)
            return (
              <div key={t.name} className="bg-inner/80 rounded-2xl h-[11.5rem] flex flex-col items-center justify-center gap-4 hover:-translate-y-1 hover:bg-inner transition">
                <Icon style={{ color: t.color }} className="text-[3.75rem]" />
                <span className="text-[1.25rem] text-center px-2">{t.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
