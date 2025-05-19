import { Spotlight } from './ui/Spotlight'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import Image from 'next/image';


const Hero = () => {
  return (
    <div className="hero">
        <Spotlight className='-top-40 -left-10 md:-left-30 md:-top-20 h-screen' fill='white' />
        <Spotlight className='-top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            <div className="hero_wrapp">
                <Image src={'/nex.png'} height={300} width={300} alt='LOGO' />
                <div className="hero_container">
                    <div className="hero_content hero_content_1">
                        <p>Smart contracts for automated lending and borrowing</p>
                    </div>
                    <div className="hero_content">
                        <p>At NexaFOZ, we transform digital ideas into scalable enterprises with innovative blockchain solutions, Web3 experiences, and strategic digital transformation to help businesses thrive in the evolving digital economy.</p>
                        <div className="hero_center_container">
                            <div className="hero_center_content">
                                <p>Leverage dApps, smart contracts, and blockchain to transform business models with secure, scalable solutions.</p>
                            </div>
                            <div className="hero_center_content hero_center_content_2">
                                <p>Build your Web3 presence with custom blockchain-powered websites for enhanced security, transparency, and user control.</p>
                            </div>
                        </div>
                    </div>
                    <div className="hero_content hero_content_2">
                        <p>Liquidity pool integration for interest generation</p>
                    </div>
                </div>
                <div className="hero_socials">
                    <FaXTwitter />
                    <FaInstagram />
                    <FaFacebook />
                    <FaDiscord />
                </div>
            </div>
    </div>
  )
}

export default Hero