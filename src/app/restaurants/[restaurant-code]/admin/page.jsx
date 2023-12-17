"use client"

import { Tab } from '@headlessui/react'
import Tabs from "./Tabs"
import Food from "./Food"
import Categories from './Categories'
import Orders from './Orders'
import Users from './Users'


export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Admin() {

  return (
    <div className="w-full px-2 py-16 text-white">
      <Tab.Group as={'div'} className="w-full flex flex-col items-center justify-center">
        <Tabs tabs={["Food", "Categories", "Orders", "Users"]}/>
        <Tab.Panels className="w-full mt-2">
          <Food/>
          <Categories/>
          <Orders/>
          <Users/>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
