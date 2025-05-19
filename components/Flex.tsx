import Image from 'next/image'
import React from 'react'
import flex from '../public/flex.png'



const Flex = () => {
  return (
    <div className="naxa_wrapp">
        <div className="nexa_tech">
            <div className="nexa_container">
                <div className="nexa_center">
                    <Image className="center_img" src={flex} alt={'d'} />
                </div>
                <div className="nexa_left">
                    <div className="nexa_content">
                        <p>Build your website using React, Svelte, Vue, Preact, web components, or just plain ol' HTML + JavaScript.</p>
                    </div>
                    <div className="nexa_content">
                        <p>Create custom applications tailored to your needs with NexaFOZ expertise.</p>
                    </div>
                    <div className="nexa_content">
                        <p>Craft visually stunning graphics that leave a lasting impression on your audience.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="hover hover1">
             <Image height="42" width="42" src={'/webdev.png'} alt={'j'} />
             <p>Web Dev</p>
        </div>
        <div className="hover hover2">
             <Image height="42" width="42" src={'/web3.png'} alt={'j'} />
             <p>Web3</p>
        </div>
        <div className="hover hover3">
             <Image height="42" width="42" src={'/mobile.png'} alt={'j'} />
             <p>Mobile App</p>
        </div>
        <div className="hover hover4">
             <Image height="42" width="42" src={'/seo.png'} alt={'j'} />
             <p>Search Engine Optimization</p>
        </div>
        <div className="hover hover5">
             <Image height="42" width="42" src={'/boy.png'} alt={'j'} />
             <p>3D Models & Animations</p>
        </div>
        <div className="hover hover6">
             <Image height="42" width="42" src={'/cusmic.png'} alt={'j'} />
             <p>Graphics Designing</p>
        </div>
        <div className="hover hover7">
             <Image height="42" width="42" src={'/ai.jpeg'} alt={'j'} />
             <p>Arthificial Intelligence</p>
        </div>
        <div className="hover hover8">
             <Image height="42" width="42" src={'/soft.png'} alt={'j'} />
             <p>Software Dev</p>
        </div>
    </div>
  )
}

export default Flex