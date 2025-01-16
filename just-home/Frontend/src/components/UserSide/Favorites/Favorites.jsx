import React from 'react'
import Card from './Card'
import { properties } from '../../../constants'

const Favorites = () => {
  return (
    <div className="flex flex-col p-8">
    <h1 className="text-2xl font-bold mb-8 tracking-wide text-sky-950">
      View all of your favorites
    </h1>
    <div className="flex gap-7">
      <Card />
    </div>
  </div>
  )
}

export default Favorites