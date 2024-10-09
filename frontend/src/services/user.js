import axios from "axios";
const USER = "http://localhost:3000/user";

const register = async (user) => {
    try{
        const response = await axios.post(`${USER}/register`, user);
        return response.data;
    } catch(error) {
        console.error('Error register: ', error);
    }
};

const login = async (user) => {
    try{
        const response = await axios.post(`${USER}/login`, user);
        return response.data;
    } catch(error) {
        console.error('Error login: ', error);
    }
};

const userServices = { register, login };
export default userServices;