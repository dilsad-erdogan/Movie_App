import { useState } from "react";
import userServices from "../../services/user";

const Register = ({ handleSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try{
        const userData = { name: name, email: email, password: password };
        await userServices.register(userData);
        alert('You are registered!');
    } catch(error) {
        console.error(error);
        alert('There was a mistake!');
    }
  };

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Create Your Account</h1>

        <form className="flex flex-col gap-3">
            <div>
                <label htmlFor="text" className="input-label">User Name</label>
                <input type="text" id="name" className="input" value={name} onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="email" className="input-label">Email</label>
                <input type="email" id="email" className="input" value={email} onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="password" className="input-label">Password</label>
                <input type="password" id="password" className="input" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
        </form>

        <button className="bg-red-600 text-white cursor-pointer hover:scale-105 duration-300 mt-5 py-2 px-8 rounded-full relative z-10 w-full" onClick={register}>Create Account</button>

        <p className="text-center text-sm my-3 cursor-pointer" onClick={handleSignIn}>Already have an account? Login</p>
    </div>
  )
}

export default Register