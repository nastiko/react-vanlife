import {
    Form,
    redirect,
    useLoaderData,
    useActionData,
    useNavigation
} from "react-router-dom";
import {loginUser} from "../api";

export function loader({request}) {
    const isLoggedIn = localStorage.getItem("loggedin");
    if (isLoggedIn) {
        const response = redirect(`/host`);
        response.body = true;
        return response;
    }

    let result = new URL(request.url).searchParams.get("message");

    return result;
}

export async function action({params, request}) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const pathname = new URL(request.url).searchParams.get("redirectTo") || `/host`

    try {
        let data = await loginUser({email, password});
        localStorage.setItem("loggedin", true);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        const response = redirect(pathname);
        response.body = true;
        return response;
    } catch (err) {
        return err.message;
    }
}

export default function Login() {

    const errorMessage = useActionData()
    const message = useLoaderData();
    const navigation = useNavigation();

    console.log("Action data:", errorMessage);
    console.log("Loader data:", message);

    return (
        <>
            <div className="flex flex-col items-center px-5">
                <h1 className="text-[32px] leading-[36px] text-[#161616] font-bold mb-4">Sign in to your account</h1>
                {message && <h3 className="text-[#ff3860] mb-10">{message}</h3>}
                {errorMessage && <h4 className="text-[#ff3860] mb-10">{errorMessage}</h4>}
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