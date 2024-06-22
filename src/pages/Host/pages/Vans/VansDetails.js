import { useOutletContext } from "react-router-dom";

export default function VansDetails() {
    const {vanInfo} = useOutletContext();
    return (
        <>
            <div className="max-w-full prose prose-h4:text-[14px] prose-h4:leading-[21px] prose-h4:font-bold">
                <h4>Name: <span className="font-normal">{vanInfo.name}</span></h4>
                <h4>Category: <span className="font-normal capitalize">{vanInfo.type}</span></h4>
                <h4>Description: <span className="font-normal">{vanInfo.description}</span></h4>
                <h4>Visibility: <span className="font-normal">Public</span></h4>
            </div>
        </>
    )
}