import Nav from '../../components/Nav'
import Pricing from "../../components/Pricing";
import React from 'react'
import { Spotlight } from '../../components/ui/Spotlight'
import Image from 'next/image';

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
                Pricing
              </h1>
              <p>
                Every project is different so our pricing reflects your unique needs, goals, and budget. Whether you're starting small or scaling big, you'll find a package that suits your vision. Transparent, fair, and no hidden fees.
              </p>
            </div>
          </div>
        </main>
        <Pricing />
    </div>
  )
}

export default page