import React, {useState} from "react";
import VanItem from "./VanItem";


export default function VansList() {

    const [vansList, setVansList] = useState([]);

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then((res) => res.json())
            .then((data) => setVansList(data.vans))
    }, [])

    const list = vansList.map(item => {
        return <VanItem key={item.id} {...item} />
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