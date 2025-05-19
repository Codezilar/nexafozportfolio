"use client";

import { GiBottomRight3dArrow } from "react-icons/gi";
import { projects } from '../data'
import React from 'react'
import { PinContainer } from "../components/ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa6';
import Link from 'next/link';



const RecentProject = ({ isIndexPage = false }: { isIndexPage?: boolean }) => {
    return (
        <div className="recentproject">
            <div className="py-20 recent_project_container" id="proects">
                <h1 className="heading">
                    A small selection of
                    <br />
                    <span className="text-purple">recent projects</span>
                </h1>
                <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-4 mt-10">
                    {projects.slice(0, isIndexPage ? 8 : projects.length).map((item, index) => (
                    
                        <div
                            className="h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]"
                            key={index}
                        >
                            <PinContainer
                                title={item.link}
                                href={item.link}
                                >
                                <Link href={item.link} target="_blank" rel="noopener noreferrer" >
                                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                    <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]"
                                    >
                                        <img
                                        src={item.img}
                                        alt="cover"
                                        className="z-10 absolute bottom-0"
                                        />
                                    </div>
                                </div>
            
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>
            
                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                    style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>
            
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                        key={index}
                                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                        style={{
                                            transform: `translateX(-${5 * index + 2}px)`,
                                        }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                    </div>
            
                                    <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                        Check Live Site
                                    </p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                    </div>
                                </div>
                                </Link>
                            </PinContainer>
                        </div>
                    ))}
                    {isIndexPage &&(
                        <div className="price-content see_more_service price-more" >        
                            <a href="/portfolio">
                                <GiBottomRight3dArrow className="packages" />
                                <h1>Click</h1>
                                <h1>
                                    See More Of Our Work
                                </h1>
                                <GiBottomRight3dArrow className="packages" />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecentProject