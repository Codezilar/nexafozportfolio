import Image from 'next/image'
import React from 'react'
import box from '../public/box.webp'
import blogImg from '../public/nexa.jpg'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'


const Blog = () => {
  return (
    <div className="blog">
        <div className="blog-container">
            <div className="blog-top">
                <Image className='box' src={box} alt='jd' />
                <h1>Blog Posts</h1>
            </div>
            <div className="blog-wrapp">
                <div className="blog-content">
                    <div className="blog-content-top">
                        <Image className='blogImg' src={blogImg} alt='jd' />
                        <h2>NexaFOZ</h2>
                    </div>
                    <p>
                        At NexaFOZ, we transform digital ideas into scalable enterprises with innovative blockchain solutions, Web3 experiences, and strategic digital transformation to help businesses thrive in the evolving digital economy.
                    </p>
                    <a href="#">More...</a>
                    <div className="blog-content-bottom">
                        <span><FaXTwitter /></span>
                        <span><FaInstagram /></span>
                        <span><FaFacebook /></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Blog