import { useOutletContext } from "react-router-dom";

export default function VansPhotos() {
    const {vanInfo} = useOutletContext();
    return (
        <>
            <img src={vanInfo.imageUrl} className="h-[100px] rounded-[5px]" alt={vanInfo.name} />
        </>
    )
}