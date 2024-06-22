import { Link } from 'react-router-dom';
import bgImg from "../assets/images/about-hero.png";

export default function About() {
    return (
        <>
            <div>
                <img src={bgImg} className="w-full h-[500px] lg:h-[750px] object-cover" alt="About Hero" />
                <div className="px-5">
                    <div className="max-w-full prose prose-h1:leading-[38px] prose-h1:font-semibold prose-h1:mt-[55px]
                                    prose-p:leading-[22px] prose-p:font-normal prose-p:text-[#000000]">
                        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                    </div>
                    <div className="bg-[#FFCC8D] rounded-[5px] flex flex-col p-[32px] my-10
                                    max-w-full prose prose-h2:font-semibold prose-h2:my-0">
                        <h2>Your destination is waiting.</h2>
                        <h2>Your van is ready.</h2>
                        <Link className="bg-[#000000] text-[#ffffff] font-bold w-full lg:w-max no-underline rounded text-center transition-all duration-300 hover:translate-x-px hover:translate-y-px p-3 mt-[27px]" to="/vans">Explore our vans</Link>
                    </div>
                </div>
            </div>
        </>
    )
}