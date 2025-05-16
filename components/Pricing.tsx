import { price } from '@/data';
import React from 'react'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="pricing">
        <div className="price-container">
            <div className="price-top">
                <h1>PRICING</h1>
                <p>Simple & Predictable pricing. No Surprises.</p>
            </div>
            <div className="price-wrapp">
                {price.map((pricing)=>(
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
            </div>
        </div>
    </div>
  )
}

export default Pricing