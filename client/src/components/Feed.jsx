import React from 'react'
import PostShare from './PostShare'
import Posts from './Posts'

const Feed = () => {
  return (
    <section className='flex basis-[50%] flex-col gap-[1rem] h-screen overflow-auto'>
      <PostShare />
      <Posts />
    </section>
  )
}

export default Feed