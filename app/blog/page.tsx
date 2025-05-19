import Blog from '../../components/Blog'
import { Spotlight } from '../../components/ui/Spotlight'
import Nav from '../../components/Nav'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className="body">
      <main className='home'>
            <Nav />
          <div className="hero">
            <Spotlight className='-top-40 -left-10 md:-left-30 md:-top-20 h-screen' fill='white' />
            <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            <div className="hero_wrapp nex-logo-hero-page" >
              <Image src={'/nex.png'} height={300} width={300} alt='LOGO' />
            </div>
          </div>
          <div className="hero-page">
            <Image src={'/gee.png'} height={500} width={500} alt='Gee' />
            <div className="hero-page-text">
              <h1>
                Blog
              </h1>
              <p>
                Welcome to the blog, a space where we share thoughts, tips, behind-the-scenes stories, and lessons learned along the way. Whether you're here for creative inspiration, practical advice, or a peek into our process, there’s something for everyone. Stay awhile, explore the latest posts, and don’t forget to join the conversation.
              </p>
            </div>
          </div>
        </main>
      <Blog />
    </div>
  )
}

export default page