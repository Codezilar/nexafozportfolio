"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FloatingNav } from './ui/FloatingNav';
import { navItems, floatNav } from "../data";
import Link from 'next/link';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { FaBars } from "react-icons/fa";
import MobileNav from './MobileNav';
import { FaTimes } from "react-icons/fa";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const active = () => {
        setIsActive(!isActive);
    };

  return (
    <>
        <MobileNav isActive={isActive} />
        <nav>
                <FloatingNav className='nav-none' floatNav={floatNav} />
                <div className="first_nav">
                        <div className="main-nav">
                            <div className="main_nav_eft">
                                <Link href={'/'}>
                                    <Image className='nav-logo' src={"/nex.png"} width={100} height={100} alt={'dn'} />
                                </Link>
                                <Link href={'/'}>
                                    <h2>NexaFOZ</h2>
                                </Link>
                                <ul>
                                    {navItems.map((navItems, key) =>(
                                        <a key={key} href={navItems.link}>{navItems.name}</a>
                                    ))}
                                </ul>
                            </div>
                            <div className="nav_right">              
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                                <span>
                                    {!isActive &&(
                                        <FaBars className='navbar' onClick={active} />
                                    )}
                                    {isActive &&(
                                        <FaTimes className='cancel_mobile' onClick={active} />
                                    )}
                                </span>
                            </div>
                        </div>
                </div>
                <div className="nav_container">
                    <div className="nav_top">
                        <p>Experience development at it's pick</p>
                        <span>
                            <Link href={'https://x.com/nexafoz/'} target="_blank" rel="noopener noreferrer">
                                <FaXTwitter />
                            </Link>
                            <Link href={'https://x.com/nexafoz/'} target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </Link>
                            <Link href={'https://x.com/nexafoz/'} target="_blank" rel="noopener noreferrer">
                                <FaFacebook />
                            </Link>
                            <Link href={'https://x.com/nexafoz/'} target="_blank" rel="noopener noreferrer">
                                <FaDiscord />
                            </Link>
                        </span>
                    </div>
                    <div className="nav_center">
                        <div className="nav_left_text">    
                            <a href="">Sign Up</a>
                        </div>
                        <p>
                            Withness Technology at it's peak!
                            <br />
                            Unlimited Posibilities
                        </p>
                    </div>   
                </div>
        </nav>
    </>
  )
}

export default Nav