import { useState } from "react"
import Fav from "../components/Fav/Fav"
import Navbar from "../components/Navbar/Navbar"
import LoginPopup from "../components/Popup/LoginPopup"

const FavPage = () => {
    const [loginPopup, setLoginPopup] = useState(false);

    const toggleLoginPopup = () => {
        setLoginPopup((prev) => !prev);
    };

    return (
        <div className="bg-gray-900 text-white duration-200">
            <Navbar toggleLoginPopup={toggleLoginPopup} />
            <Fav />

            <LoginPopup loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup}/>
        </div>
    )
}

export default FavPage