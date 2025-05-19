import Nav from '../../components/Nav'
import { Spotlight } from '../../components/ui/Spotlight'

const page = () => {
  return (
    <div className="body">
        <main className='home'>
            <Nav />
          <div className="hero">
            <Spotlight className='-top-40 -left-10 md:-left-30 md:-top-20 h-screen' fill='white' />
            <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
          </div>
        </main>
        
    </div>
  )
}

export default page