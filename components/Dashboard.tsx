import React from 'react'
import { FaDownload } from "react-icons/fa6";
import { IoStatsChart } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import { Component } from './Anal';


const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dash-top">
            <div className="dash-top-left">
                <h3>DASHBOARD</h3>
                <p>Welcome to your dashboard</p>
            </div>
            <div className="dash-top-right">
                <FaDownload />
                <span>Download Reports</span>
            </div>
        </div>
        <div className="dash-card">
            <div className="dash-card-container">
                <div className="dash-card-content">
                    <div className="padding insights">
                        <div className="sales insight-container">
                                <IoStatsChart className="anal"/>
                            <div className="middle">
                                <div className="middle-left">
                                    <h3>Total Income</h3>
                                    <h1>$25,000</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>81%</p>
                                    </div>
                                </div>
                            
                            </div>
                            <small className="text-muted">
                                Last 7 Days
                            </small>
                        </div>
                        <div className="expences insight-container">
                                <FaChartPie className="anal"/>
                            <div className="middle">
                                <div className="middle-left">
                                    <h3>Total Withdrawal</h3>
                                    <h1>$30,000</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>81%</p>
                                    </div>
                                </div>                            
                            </div>
                            <small className="text-muted">
                                Last 7 Days
                            </small>
                        </div>
                        <div className="income insight-container">
                                <GiChart className="anal"/>
                            <div className="middle">
                                <div className="middle-left">
                                    <h3>Total Withdrawal</h3>
                                    <h1>$5,000</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div className="number">
                                        <p>55%</p>
                                    </div>
                                </div>                            
                            </div>
                            <small className="text-muted">
                                Last 7 Days
                            </small>
                        </div>
                    </div>
                </div>
                <Component />
            </div>
        </div>
    </div>
  )
}

export default Dashboard