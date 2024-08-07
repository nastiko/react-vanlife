import React from "react";
import {Link, useLocation, useLoaderData} from "react-router-dom";
import {getVans} from "../../api"

export function loader({params}) {
    return getVans(params.id);
}

export default function VanDetail() {
    const location = useLocation();
    const getQuery = location.state && location.state.getQuery || "";
    const van = useLoaderData();

    return (
        <>
            <div className="max-w-xl px-5 sm:px-0 mx-auto">
                <Link to={{pathname: '..', search: getQuery}}
                      relative="path"
                      className="flex items-center gap-x-2">
                    <span className="mb-1">&larr;</span>
                    <span>Back to {getQuery && van ? `${van.type}` : 'all'} vans</span>
                </Link>
            </div>
            <div>
                <div className="max-w-xl px-5 sm:px-0 pt-5 pb-10 mx-auto">
                    <div className="w-full md:h-[490px] flex justify-center">
                        <img className="w-full h-full object-cover rounded-[5px] my-0" src={van.imageUrl} alt={van.name}/>
                    </div>
                    <div className="flex flex-col
                                        max-w-full prose prose-h2:text-[18px] prose-h2:sm:text-[20px] prose-h2:font-semibold prose-h2:text-[#000000] prose-h2:my-0
                                        prose-h3:text-[20px] prose-h3:font-semibold prose-h3:text-[#000000] prose-h3:my-0
                                        prose-p:text-[16px] prose-p:leading-6 prose-p:text-[#000000] prose-p:font-medium prose-p:my-2">
                        <span className={`w-max text-[#ffffff] font-medium rounded-[5px] capitalize py-[6px] px-[26px] my-10 ${van.type}`}>{van.type}</span>
                        <h2>{van.name}</h2>
                        <h3>£{van.price}<span className="font-normal">/day</span></h3>
                        <p>{van.description}</p>
                        <button className="bg-[#FF8C38] text-[#ffffff] font-bold w-full no-underline rounded text-center transition-all duration-300 hover:translate-x-px hover:translate-y-px p-3 mt-[27px]">Rent this van</button>
                    </div>
                </div>
            </div>
        </>
    )
}