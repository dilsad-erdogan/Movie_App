import { useState } from "react";

const Register = ({ handleSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {};

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
                <label htmlFor="text" className="input-label">Phone</label>
                <input type="text" id="phone" className="input" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
            </div>
            <div>
                <label htmlFor="password" className="input-label">Password</label>
                <input type="password" id="password" className="input" value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div>
        </form>

        <button className="cursor-pointer hover:scale-105 duration-300 mt-5 py-2 px-8 rounded-full relative z-10 w-full" onClick={register}>Create Account</button>

        <p className="text-center text-sm my-3 cursor-pointer" onClick={handleSignIn}>Already have an account? Login</p>
    </div>
  )
}

export default Register