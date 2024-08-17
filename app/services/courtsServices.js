import axios from "axios";
import Cookies from 'js-cookie';
export const allCourts = async () =>{
    try {
        const token = Cookies.get('authToken')
        const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/court/all`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
         
        return response;
    }
    catch (error) {
        console.log("all Courts",error.response)
        return error.response || { message: "An error occurred", error };
    }
    
}