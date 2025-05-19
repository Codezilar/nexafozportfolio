"use client"
import Image from 'next/image'
import React from 'react'

import { IoHome } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsQuestionCircle } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { MdOutlineMap } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className="sidebar-top">
        {/* <div className="sidelogo">
          <Image src={'/nex.png'} className='mb-3' height={40} width={40} alt='' />
          <h1>NexaFOZ</h1>
        </div> */}
        <div className="admin-user">
          {/* <UserButton  /> */}
          <Image src={'/nexa.jpg'} alt='d' className='admin-avatar mb-2' height={80} width={80} />
          <h3>Goodness Christopher</h3>
          <h2>Founder & CEO</h2>
        </div>
      </div>

      <div className="side-item">
        <span className='active'>
          <IoHome className="sideIcon" /> 
          <p>Dashboard</p>
        </span>
        <div className='sideItem-container'>
          <small>Data</small>
          <span>
            <FaUsers className="sideIcon" /> 
            <p>Manage Team</p>
          </span>
          <span>
            <MdContacts className="sideIcon" /> 
            <p>Contacts Information</p>
          </span>
          <span>
            <TiDocumentText className="sideIcon" /> 
            <p>Invoices Balances</p>
          </span>
        </div>
        {/* Portolio */}
        <div className='sideItem-container'>
          <small>Portfolio</small>
          <span>
            <FaUsers className="sideIcon" /> 
            <p>Manage Post</p>
          </span>
          <span>
            <MdContacts className="sideIcon" /> 
            <p>Upload</p>
          </span>
        </div>

        {/* blog */}
        <div className='sideItem-container'>
          <small>Blog</small>
          <span>
            <FaUsers className="sideIcon" /> 
            <p>Manage Blog</p>
          </span>
          <span>
            <MdContacts className="sideIcon" /> 
            <p>Upload Blog</p>
          </span>
        </div>
        <div className='sideItem-container'>
          <small>Pages</small>
          <span>
            <FaRegUser className="sideIcon" /> 
            <p>Profile Form</p>
          </span>
          <span>
            <SlCalender className="sideIcon" /> 
            <p>Calendar</p>
          </span>
          <span>
            <BsQuestionCircle className="sideIcon" />
            <p>FAQ Page</p>
          </span>
        </div>
        <div className='sideItem-container'>
          <small>Charts</small>
          <span>
            <IoStatsChart className="sideIcon" /> 
            <p>Bar Chart</p>
          </span>
          <span>
            <FaChartPie className="sideIcon" /> 
            <p>Pie Chart</p>
          </span>
          <span>
            <GiChart className="sideIcon" /> 
            <p>Line Chart</p>
          </span>
          <span>
            <MdOutlineMap className="sideIcon" /> 
            <p>Geography Chart</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar