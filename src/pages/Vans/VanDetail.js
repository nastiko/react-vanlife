import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function VanDetail() {
    const params = useParams();

    const [vanDetail, setVanDetail] = useState(null);

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetail(data.vans))
    }, [params.id])

    return (
        <>
            <div className="max-w-xl px-5 sm:px-0 mx-auto">
                <Link to=".."
                      relative="path"
                      className="flex items-center gap-x-2">
                    <span className="mb-1">&larr;</span>
                    <span>Back to all vans</span>
                </Link>
            </div>
            <div>
                {vanDetail ? (
                    <div className="h-[calc(100vh-184px)] max-w-xl px-5 sm:px-0 pt-5 pb-10 mx-auto">
                        <div className="w-full md:h-[490px] flex justify-center">
                            <img className="w-full h-full object-cover rounded-[5px] my-0" src={vanDetail.imageUrl} alt={vanDetail.name}/>
                        </div>
                        <div className="flex flex-col
                                        max-w-full prose prose-h2:text-[18px] prose-h2:sm:text-[20px] prose-h2:font-semibold prose-h2:text-[#000000] prose-h2:my-0
                                        prose-h3:text-[20px] prose-h3:font-semibold prose-h3:text-[#000000] prose-h3:my-0
                                        prose-p:text-[16px] prose-p:leading-6 prose-p:text-[#000000] prose-p:font-medium prose-p:my-2">
                            <span className={`w-max text-[#ffffff] font-medium rounded-[5px] capitalize py-[6px] px-[26px] my-10 ${vanDetail.type}`}>{vanDetail.type}</span>
                            <h2>{vanDetail.name}</h2>
                            <h3>£{vanDetail.price}<span className="font-normal">/day</span></h3>
                            <p>{vanDetail.description}</p>
                            <button className="bg-[#FF8C38] text-[#ffffff] font-bold w-full no-underline rounded text-center transition-all duration-300 hover:translate-x-px hover:translate-y-px p-3 mt-[27px]">Rent this van</button>
                        </div>
                    </div>
                ) : <h2 className="text-[32px] leading-[36px] text-[#000000] font-semibold px-5 my-[37px]">Loading...</h2>}
            </div>
        </>
    )
}