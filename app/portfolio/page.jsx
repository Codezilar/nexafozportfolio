import Nav from '../../components/Nav'
import { Spotlight } from '../../components/ui/Spotlight'
import RecentProject from "../../components/RecentProject";
import AnimationGFX from '../../components/AnimationGFX';
import Image from 'next/image';
import Models from '../../components/Models';

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
                PORTFOLIO
              </h1>
              <p>
                Welcome to our portfolio. Here, you'll find a curated selection of work that reflects our passion, precision, and problem solving. Each project is a unique story crafted with intent, tailored to client goals, and executed with attention to detail. Whether it's design, development, branding, or strategy, every piece represents a collaborative journey toward impactful results.
              </p>
            </div>
          </div>
        </main>
        <RecentProject />
        <AnimationGFX />
        <Models />
    </div>
  )
}

export default page