import { Tab } from '@headlessui/react'
import React from 'react'

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }  

const Tabs = ({tabs}) => {
  return (
    <Tab.List className="flex w-[30rem] space-x-1 rounded-xl bg-blue-900/20 p-1">
        {tabs.map(tab => {
            return (
                <Tab
                className={({ selected }) =>
                    classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                    selected
                        ? 'hover:bg-white/[0.12] text-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                }
                >
                {tab}
                </Tab>
            )
        })}
    </Tab.List>
  )
}

export default Tabs