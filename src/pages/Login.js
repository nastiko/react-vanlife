import {useState} from "react";
import {useLoaderData} from "react-router-dom";

export function loader({request}) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const message = useLoaderData();

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

    }

    return (
        <>
            <div className="h-[calc(100vh-184px)] flex flex-col items-center px-5">
                <h1 className="text-[32px] leading-[36px] text-[#161616] font-bold mb-4">Sign in to your account</h1>
                { message && <h3 className="text-[#ff3860] mb-10">{message}</h3>}
                <form className="max-w-[500px] w-full flex flex-col" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        className="h-10 font-normal indent-[10px] border-[1px] border-t-[#d1d5db] border-x-[#d1d5db] border-b-transparent rounded-t-lg focus:outline-0"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={formData.password}
                        className="h-10 font-normal indent-[10px] border-[1px] border-t-[#d1d5db] border-x-[#d1d5db] rounded-b-lg focus:outline-0"
                    />
                    <button className="h-[55px] text-[#ffffff] bg-[#FF8C38] border-none rounded-[6px] mt-[22px]">Login</button>
                </form>
            </div>
        </>
    )
}