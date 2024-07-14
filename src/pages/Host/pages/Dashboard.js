import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import {Link, useLoaderData} from "react-router-dom";
import {requireAuth} from "../../../utils";
import {getHostVans} from "../../../api";
import HostVanItem from "./Vans/HostVanItem";


export async function loader({request}) {
    await requireAuth(request);
    return getHostVans();
}

export default function Dashboard() {
    const vansList = useLoaderData();

    function renderVanElements() {
        return vansList.map(item => {
            return (
                <>
                    <Link to={`host-vans/${item.id}`} className="bg-[#ffffff] rounded-[5px] no-underline">
                        <div className="flex gap-x-5 p-5" key={item.id}>
                            <img className="h-[70px] rounded-[5px] my-0" src={item.imageUrl} alt={item.name}/>
                            <div className="max-w-full prose prose-h3:text-[20px] prose-h3:font-semibold prose-h3:my-0 prose-p:my-0">
                                <h3>{item.name}</h3>
                                <p>£{item.price}/day</p>
                            </div>
                        </div>
                    </Link>
                </>
            )
        })
    }

    return (
        <>
            <div className="flex items-center justify-between bg-[#ffead0] py-[37px] px-[26px]">
                <div className="max-w-full prose prose-h1:text-[36px] prose-h1:text-[#161616] prose-h1:m-0
                                prose-h2:text-[38px] prose-h2:text-[#161616] prose-h2:font-bold prose-h2:m-0
                                prose-p:text-[#4d4d4d] prose-a:no-underline">
                    <h1>Welcome!</h1>
                    <p>Income last <span className="underline font-bold">30 days</span></p>
                    <h2>$2,260</h2>
                </div>
                <Link to="income">Details</Link>
            </div>
            <div className="max-w-full flex items-center justify-between bg-[#ffddb2] py-[25px] px-[26px]
                            prose prose-h2:m-0 prose-p:text-[20px] prose-p:text-[#4d4d4d] prose-p:ml-[5px] prose-p:my-0 prose-a:no-underline">
                <div className="flex gap-x-4">
                    <h2>Review score</h2>
                    <div className="flex">
                        <BsFillStarFill className="text-[25px] text-[#ff8c38] mt-[3px]"/>
                        <p>
                            <span className="text-[#161616] font-bold">5.0</span>/5
                        </p>
                    </div>
                </div>
                <Link to="reviews">Details</Link>
            </div>
            <div className="py-[38px] px-[26px]">
                <div className="max-w-full flex items-center justify-between prose prose-h2:text-[24px] prose-h2:text-[#161616] prose-h2:m-0
                                prose-a:no-underline">
                    <h2>Your listed vans</h2>
                    <Link to="host-vans">View all</Link>
                </div>
                <div>
                    {renderVanElements()}
                </div>
            </div>
        </>
    )
}