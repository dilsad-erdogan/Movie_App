import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import Search from "../components/Search/Search"
import LoginPopup from "../components/Popup/LoginPopup"

const SearchPage = () => {
    const [loginPopup, setLoginPopup] = useState(false);

    const toggleLoginPopup = () => {
        setLoginPopup((prev) => !prev);
    };

    return (
        <div className="bg-gray-900 text-white duration-200">
            <Navbar toggleLoginPopup={toggleLoginPopup} />
            <Search />

            <LoginPopup loginPopup={loginPopup} toggleLoginPopup={toggleLoginPopup}/>
        </div>
    )
}

export default SearchPage