import { GiBottomRight3dArrow } from "react-icons/gi";
import { price } from '../data';
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = ({ isIndexPage = false }: { isIndexPage?: boolean }) => {
  return (
    <div className="pricing">
        <div className="price-container">
            <div className="price-top">
                <h1>PRICING</h1>
                <p>Simple & Predictable pricing. No Surprises.</p>
            </div>
            <div className="price-wrapp">
                {price.slice(0, isIndexPage ? 8 : price.length).map((pricing)=>(
                    <div className="price-content" key={pricing.title}>
                        <div className="price-content-top">
                            <h2>{pricing.title}</h2>
                            <span>${pricing.cost}</span>
                        </div>
                        <div className="pricing-detail">
                            {pricing.desc.map((desc)=>(
                                <div className="pricing-content" key={desc}>
                                    <IoMdCheckmarkCircleOutline className='priceCheck' />
                                    <p>
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <a href="#">Get Started</a>
                    </div>
                ))}
                {isIndexPage &&(
                    <div className="price-content see_more_service" >        
                        <a href="/pricing">
                            <GiBottomRight3dArrow className="packages" />
                            <h1>Click</h1>
                            <h1>
                                See Complete Service Packages 
                            </h1>
                            <GiBottomRight3dArrow className="packages" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default Pricing