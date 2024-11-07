import { NavLink } from "react-router-dom"

function BannerStrip({message}){
    return (
        <div className="bg-lime-400 flex items-center justify-center min-h-48">
            <div className="text-center">
                <h1 className="text-3xl font-light text-black mb-8 motion-translate-x-in-[0%] motion-translate-y-in-[120%] motion-opacity-in-[0%] motion-duration-[1.13s] motion-duration-[0.84s]/opacity motion-delay-[0.28s]/opacity motion-ease-bounce ">
                {message}
                </h1>
                <NavLink to="/contact-us" className="bg-black text-lime-400 py-2 px-4 text-sm font-bold motion-scale-in-[0.5] motion-rotate-in-[-10deg] motion-blur-in-[10px] motion-delay-[0.75s]/rotate motion-delay-[0.45s]/blur hover:bg-opacity-80">
                CONTACT
                </NavLink>
            </div>
        </div>
    )
}

export default BannerStrip;