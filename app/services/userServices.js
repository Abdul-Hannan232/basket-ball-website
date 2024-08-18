import axios from "axios";
import Cookies from 'js-cookie';
export const allUsers = async () => {
    try {
        const token = Cookies.get('authToken')
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/user/all`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;
    }
    catch (error) {
        return error.response || { message: "An error occurred", error };
    }

}

export const addUser = async (body) => {
     try {
        const token = Cookies.get('authToken');
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/add`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
       
        return response;
    } catch (error) {
        
        return error.response
    }
};


export const updateUser = async (body) => {
    try {

        const token = Cookies.get('authToken');

        const response = await axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}/user/update`,
            body, // Body is sent as the second argument
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response;
    }
    catch (error) {
        return error.response || { message: "An error occurred", error };
    }

}