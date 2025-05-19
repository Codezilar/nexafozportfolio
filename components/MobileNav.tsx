"use client"
import { navItems } from '../data';
import React from 'react'

interface MobileNavProps {
    isActive: boolean
}
  
const MobileNav = ({ isActive }: MobileNavProps) => {
  return (
    <div className='MobileNa'>
        <div className={`MobileNav-container ${isActive ? 'nav_activator' : ''}`}>
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