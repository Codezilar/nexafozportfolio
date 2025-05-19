import { FaStar } from "react-icons/fa";
import { InfiniteMovingCards } from "./ui/Infinite-moving-cards";
import { testimonials } from "../data";

const Reviews = () => {
  return (
    <div className="recentproject">
        <div className="recent_project_container" id="proects">
            <h1 className="heading">
                    2,000+ Organisations & Individuals
                <br />
                <span className="text-purple">Choose NexaFOZ</span>
            </h1>
            <div className="flex justify-center items-center gap-2">
                <span className="flex ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </span>
                <p>Based on 2,000+ reviews on</p>
            </div>
            <div className="py-[5rem] flex flex-col  items-center">
                <div className="rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                    </div>
                </div>
        </div>    
    </div>
  )
}

export default Reviews