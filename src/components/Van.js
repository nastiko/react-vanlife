import React from "react";
import { Link } from "react-router-dom";

export default function Van(props) {
    const { id, imageUrl, name, price, type } = props;

    return (
        <>
            <Link to={`/vans/${id}`} key={id}>
                <div className="w-full">
                    <img className="w-full h-full object-cover rounded-[5px] my-0" src={imageUrl} alt={name}/>
                </div>
                <div className="max-w-full flex flex-col sm:flex-row sm:items-center justify-between my-4
                                prose prose-h3:text-[18px] prose-h3:sm:text-[20px] prose-h3:font-semibold prose-h3:text-[#000000] prose-h3:shrink-0 prose-h3:mb-0
                                prose-p:text-[20px] prose-p:font-semibold prose-p:text-[#000000] prose-p:my-0">
                    <h3>{name}</h3>
                    <div className="flex flex-wrap sm:justify-center items-center gap-x-2">
                        <p>£{price}</p>
                        <span className="font-normal">/day</span>
                    </div>
                </div>
                <span className={`h-[34px] text-[#ffffff] font-medium rounded-[5px] capitalize py-[6px] px-[26px] ${type}`}>{type}</span>
            </Link>
        </>
    )
}