import axios from "axios";
const FAV = "http://localhost:3000/fav";

const get = async (user_id) => {
    try{
        const response = await axios.get(`${FAV}/get/${user_id}`);
        return response.data;
    } catch(error) {
        console.error('Error register: ', error);
    }
};

const add = async (fav) => {
    try{
        const response = await axios.post(`${FAV}/add`, fav);
        return response.data;
    } catch(error) {
        console.error('Error add: ', error);
    }
};

const deleted = async (id) => {
    try{
        const response = await axios.patch(`${FAV}/delete/${id}`);
        return response.data;
    } catch(error) {
        console.error('Error login: ', error);
    }
};

const favServices = { get, add, deleted };
export default favServices;