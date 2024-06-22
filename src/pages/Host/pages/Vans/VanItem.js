import { Link } from "react-router-dom";

export default function VanItem(props) {
    const {id, imageUrl, name, price} = props;

    return (
        <>
            <Link to={`/host/host-vans/${id}`} className="bg-[#ffffff] rounded-[5px] no-underline">
                <div className="flex gap-x-5 p-5" key={id}>
                    <img className="h-[70px] rounded-[5px] my-0" src={imageUrl} alt={name}/>
                    <div className="max-w-full prose prose-h3:text-[20px] prose-h3:font-semibold prose-h3:my-0 prose-p:my-0">
                        <h3>{name}</h3>
                        <p>£{price}/day</p>
                    </div>
                </div>
            </Link>
        </>
    )
}