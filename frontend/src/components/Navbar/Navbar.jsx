import { FaSearch, FaHeart } from "react-icons/fa";

const Navbar = ({ toggleLoginPopup }) => {
  return (
    <div className="duration-200 relative z-40 container mx-auto max-w-screen-lg">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          <a href="/" className="text-red-600 font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Movie App</a>

          <div className="flex justify-between items-center gap-4">
            <a href="/search"><FaSearch /></a>
            <a href="/fav"><FaHeart /></a>
            <button className="bg-red-600 text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10" onClick={toggleLoginPopup}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar