import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <div className="w-full h-[calc(100vh-184px)] py-[45px] px-5 xl:px-0">
                <div className="h-full flex flex-col justify-center items-center max-w-full prose prose-h1:text-[36px] prose-h1:leading-[42px] prose-h1:font-bold prose-h1:text-[#000000]">
                    <h1>Sorry, the page you were looking for was not found.</h1>
                    <Link to="/" className="bg-[#000000] text-[#ffffff] font-bold w-full lg:w-max no-underline rounded text-center transition-all duration-300 hover:translate-x-px hover:translate-y-px p-3 mt-[27px]">Return to Home</Link>
                </div>
            </div>
        </>
    )
}