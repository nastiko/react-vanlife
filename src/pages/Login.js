import {
    Form,
    redirect,
    useLoaderData,
    useActionData,
    useNavigation
} from "react-router-dom";
import {loginUser} from "../api";

export function loader({request}) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({request}) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") || "/host"
    try {
        await loginUser({email, password});
        localStorage.setItem("loggedin", true);
        return redirect(pathname);
    } catch (err) {
        console.error("Error during login:", err);
        return err.message;
    }
}

export default function Login() {

    const errorMessage = useActionData()
    const message = useLoaderData();
    const navigation = useNavigation();

    console.log("Action data:", errorMessage);

    return (
        <>
            <div className="h-[calc(100vh-184px)] flex flex-col items-center px-5">
                <h1 className="text-[32px] leading-[36px] text-[#161616] font-bold mb-4">Sign in to your account</h1>
                {message && <h3 className="text-[#ff3860] mb-10">{message}</h3>}
                {errorMessage?.error && <h3 className="red">{errorMessage.error}</h3>}
                <Form method="post" className="max-w-[500px] w-full flex flex-col">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="h-10 font-normal indent-[10px] border-[1px] border-t-[#d1d5db] border-x-[#d1d5db] border-b-transparent rounded-t-lg focus:outline-0"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="h-10 font-normal indent-[10px] border-[1px] border-t-[#d1d5db] border-x-[#d1d5db] rounded-b-lg focus:outline-0"
                    />
                    <button
                        disabled={navigation.state === "submitting"}
                        className="h-[55px] text-[#ffffff] bg-[#FF8C38] border-none rounded-[6px] mt-[22px] disabled:bg-[#aaaaaa] disable:cursor-not-allowed"
                    >
                        {navigation.state === "submitting" ? 'Loggin in...' : 'Log in'}
                    </button>
                </Form>
            </div>
        </>
    )
}