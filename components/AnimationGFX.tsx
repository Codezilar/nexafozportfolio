'use client'

import { projects } from '@/data'
import React from 'react'
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from 'react-icons/fa6';
import Link from 'next/link';


const AnimationGFX = () => {
    return (
        <div className="recentproject">
            <div className="py-20 recent_project_container" id="proects">
                <h1 className="heading">
                    A small selection of our
                    <br />
                    <span className="text-purple">Animations & Graphics</span>
                </h1>
                <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-8 mt-10">
                {projects.map((item) => (
                
                    <div
                        className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-96 w-[80vw]"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.link}
                            href={item.link}
                            >
                            <Link href={item.link} >
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
                            </Link>
                        </PinContainer>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default AnimationGFX