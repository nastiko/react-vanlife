import { useOutletContext } from "react-router-dom";

export default function VansDVansPricing() {
    const {vanInfo} = useOutletContext();
    return (
        <>
            <div className="max-w-full prose prose-h3:text-[24px] prose-h3:font-semibold">
                <h3>£{vanInfo.price}<span className="font-normal">/day</span></h3>
            </div>
        </>
    )
}