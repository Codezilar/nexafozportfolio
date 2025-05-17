import { navItems } from '@/data';
import React from 'react'
import { FaTimes } from "react-icons/fa";

const MobileNav = () => {
  return (
    <div className='MobileNav'>
        <div className="MobileNav-container">
            <FaTimes className='cancel_mobile' />
            <ul>
                {navItems.map((navItems, key) =>(
                    <a key={key} href={navItems.link}>{navItems.name}</a>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default MobileNav