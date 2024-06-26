import React, {useState} from "react";
import { useLoaderData} from "react-router-dom";
import HostVanItem from "./HostVanItem";
import { getHostVans } from "../../../../api"


export function loader() {
    return getHostVans();
}

export default function HostVansList() {
    const vansList = useLoaderData();

    const list = vansList.map(item => {
        return <HostVanItem key={item.id} {...item} />
    })

    return (
        <>
            <div className="h-[calc(100vh-294px)] max-w-full prose prose-h1:text-[32px] prose-h1:leading-10 prose-h1:font-bold p-5">
                <h1>Your listed vans</h1>
                <div className="flex flex-col justify-center gap-5 my-[37px]">
                    {
                        vansList.length > 0 ? (
                            <div className="flex flex-col justify-center gap-5">
                                {list}
                            </div>

                        ) : (
                            <h2 className="text-[18px] leading-[36px] text-[#000000] font-semibold px-5">Loading...</h2>
                        )
                    }
                </div>
            </div>
        </>
    )
}