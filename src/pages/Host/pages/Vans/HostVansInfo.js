import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import VansLayout from "../../../../layouts/VansLayout";


export default function HostVansInfo() {

    const params = useParams();
    const [vanInfo, setVansInfo] = useState(null);

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then((res) => res.json())
            .then((data) => setVansInfo(data.vans))
    }, [params.id])

    return (
        <>
            <Link to=".."
                  relative="path"
                  className="flex items-center gap-x-2 px-5">
                <span className="mb-1">&larr;</span>
                <span>Back to all vans</span>
            </Link>
            <div>
                {vanInfo ? (
                    <div className="h-[calc(100vh-359px)]">
                        <div className="bg-[#ffffff] rounded-[5px] p-6 mx-5 my-[37px]">
                            <div className="flex items-center gap-x-5">
                                <img className="h-[100px] md:h-[160px] rounded-[5px]" src={vanInfo.imageUrl} alt={vanInfo.name}/>
                                <div className="max-w-full prose prose-h3:text-[20px] prose-h3:md:text-[26px] prose-h3:font-bold prose-h3:leading-6 prose-h3:mt-5 prose-h3:mb-0
                                            prose-h4:text-[18px] prose-h4:md:text-[20px]">
                                    <span className={`w-max text-[#ffffff] font-medium rounded-[5px] capitalize py-[6px] px-[26px] ${vanInfo.type}`}>{vanInfo.type}</span>
                                    <h3>{vanInfo.name}</h3>
                                    <h4>£{vanInfo.price}<span className="font-normal">/day</span></h4>
                                </div>
                            </div>
                            <VansLayout context={{vanInfo}}/>
                        </div>
                    </div>
                ) : (
                    <h2 className="text-[18px] leading-[36px] text-[#000000] font-semibold px-5 my-[37px]">Loading...</h2>
                )
                }
            </div>
        </>
    )
}