import Header from '@/components/Header'
import React from 'react'

const initial = false;

export default function contact() {
  return (
    <main
      className="
        h-screen
        text-white
        bg-gradient-to-r from-indigo-500 to-blue-500
        snap-y snap-mandatory
        overflow-scroll overflow-x-hidden"
    >
      <Header initial={initial}/>
    </main>
  )
}
