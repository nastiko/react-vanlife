import React from "react";
import {useLoaderData} from "react-router-dom";
import HostVanItem from "./HostVanItem";
import {getHostVans} from "../../../../api";
import {requireAuth} from "../../../../utils";


export async function loader({request}) {
    await requireAuth(request);
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
                    <div className="flex flex-col justify-center gap-5">
                        {list}
                    </div>
                </div>
            </div>
        </>
    )
}