import { Link } from "react-router-dom"

export default function Home() {
    return (
        <>
            <div className="w-full h-screen bg-[linear-gradient(0deg,rgba(0,0,0,0.36),rgba(0,0,0,0.36)),url('../src/assets/images/home-hero.png')] bg-no-repeat bg-center bg-cover py-[45px] px-5 xl:px-0">
                <div className="h-full flex flex-col justify-center items-center max-w-full prose prose-h1:text-[36px] prose-h1:leading-[42px] prose-h1:font-bold prose-h1:text-[#ffffff]
                                prose-p:leading-6 prose-p:text-[#ffffff] prose-p:my-0">
                    <h1>You got the travel plans, we got the travel vans.</h1>
                    <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                    <Link className="bg-[#FF8C38] text-[#ffffff] font-bold w-full lg:w-max no-underline rounded text-center transition-all duration-300 hover:translate-x-px hover:translate-y-px p-3 mt-[27px]" to="vans">Find your van</Link>
                </div>
            </div>
        </>
    )
}