import { useState } from "react"
import Hero from "../components/Hero/Hero"
import Navbar from "../components/Navbar/Navbar"
import LoginPopup from "../components/Popup/LoginPopup"

const MainPage = () => {
    const [loginPopup, setLoginPopup] = useState(false);

    const toggleLoginPopup = () => {
        setLoginPopup((prev) => !prev);
    };

    return (
        <div className="bg-gray-900 text-white duration-200">
            <Navbar toggleLoginPopup={toggleLoginPopup} />
            <Hero />

            <LoginPopup loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup}/>
        </div>
    )
}

export default MainPage