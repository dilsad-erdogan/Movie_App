import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Register from "./Register";
import Login from "./Login";

const LoginPopup = ({ loginPopup, toggleLoginPopup }) => {
  const loginPopupRef = useRef();
  const [showsignin, setShowsignin] = useState(false);

  window.addEventListener("click", (e) => {
    if (loginPopupRef.current === e.target) {
      toggleLoginPopup();
    }
  });

  const handleSignIn = () => {
    setShowsignin(!showsignin);
  }

  return (
    <div>
      {loginPopup && (
        <div ref={loginPopupRef} className="fixed top-0 left-0 w-full h-full z-50 overflow-y-auto">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto bg-gray-600 rounded-2xl">
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl bg-white/10 backdrop-blur-md sm:w-[600px] md:w-[380px] shadow-custom-inset">
              {showsignin ? <Register handleSignIn={handleSignIn} /> : <Login handleSignIn={handleSignIn} />}
              </motion.div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoginPopup