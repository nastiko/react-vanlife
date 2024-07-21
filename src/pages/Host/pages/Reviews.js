import review from "../../../assets/images/reviews.png";
import {BsFillStarFill} from "react-icons/bs";
import React from "react";

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    function renderReviews() {
        return reviewsData.map(item => {
            return (
                <>
                    <ul className="max-w-full p-0
                                   prose prose-li:list-none prose-li:border-[1px] prose-li:border-b-[#c7c7c7] prose-li:border-x-transparent prose-li:border-t-transparent prose-li:last:border-none
                                   prose-h6:text-[16px] prose-h6:text-[#161616] prose-h6:font-bold prose-h6:mr-2.5" key={item.id}>
                        <li>
                            <div className="flex gap-2">
                                {[...Array(item.rating)].map((_, i) => (
                                    <BsFillStarFill className="text-[20px] text-[#ff8c38]" key={i}/>
                                ))}
                            </div>
                            <div className="my-2.5">
                                <div className="flex gap-2">
                                    <h6>{item.name}</h6>
                                    <span className="text-[16px] text-[#8c8c8c]">{item.date}</span>
                                </div>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    </ul>
                </>
            )
        })
    }

    return (
        <>
            <div className="flex flex-col py-[37px] px-[26px]
                            max-w-full prose prose-h1:text-[36px] prose-h1:text-[#161616] prose-h1:my-0
                            prose-h2:text-[38px] prose-h2:text-[#161616] prose-h2:font-bold prose-h2:my-0
                            prose-p:text-[#4d4d4d] prose-p:my-0 prose-a:no-underline">
                <div className="flex items-end gap-4 mb-5">
                    <h1>Your reviews</h1>
                    <p className="shrink-0">Last <span className="underline font-bold">30 days</span></p>
                </div>
                <div className="flex items-center gap-2">
                    <h2>5.0</h2>
                    <div className="flex items-center gap-2">
                        <BsFillStarFill className="text-[25px] text-[#ff8c38]"/>
                        <span className="text-[#161616] font-bold">overall rating</span>
                    </div>
                </div>
                <img className="max-w-[500px]" src={review} alt="Income graph"/>
                <div>
                    {renderReviews()}
                </div>
            </div>
        </>
    )
}