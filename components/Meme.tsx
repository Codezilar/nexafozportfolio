import React from 'react'
import Image from 'next/image'

const Meme = () => {
  return (
    <div className="meme-wrapp">
        <h1> 
            Crafting Memecoin
            <br />
            <span className="text-purple">Masterpieces with NexaFOZ</span>
        </h1>
        <div className="meme">
            <div className="meme-container">
                <Image className='memeImg' src={'/plane.png'} height={350} width={350} alt='' />
                <div className="memeIngText">
                    <h3>Bullish On Memes</h3>
                    <p>A sleek interface with futuristic elements, NFTs floating around, and a relaxed person sipping coffee, effortlessly creating a website.</p>
                </div>
            </div>
            <video autoPlay loop muted width="100%">
                <source src="/pepeclip.mp4"  />
            </video>
            <div className="meme_text">
                <span className="meme1">
                    <h3>Experience Unlimited Posibilities</h3>
                    <p>
                        At NexaFOZ, we approach memecoin projects with the same dedication and precision as creating a high-quality film. Our development process is designed to captivate audiences, creating seamless, engaging Web3 applications that hold viewers' attention from start to finish.
                    </p>
                </span>
                <span className="meme2">
                    <h3>Blockchain Cinematography</h3>
                    <p>
                        With expertise in blockchain networks such as Ethereum, Polygon, and Solana, we capture the best of decentralized technology to ensure your memecoin project is set up for success.
                    </p>
                </span>
            </div>
        </div>   
    </div>
  )
}

export default Meme