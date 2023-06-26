import React from 'react'
import TrendCard from './TrendCard'
import FollowersCard from './FollowersCard'

const Widgets = () => {
  return (
    <section className='flex flex-col gap-[1rem] basis-[27%]'>
      <FollowersCard />
      <TrendCard />
    </section>
  )
}

export default Widgets