import axios from "axios";
import Cookies from 'js-cookie';
export const allCourts = async (token) =>{ 
    try {
      
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

export const addCourt = async (body,token) => {
   
    try {
         const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/court/add`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${token}`,                },
            }
        );

        return response;
    } catch (error) {
        return error.response;
    }
};
 

export const deleteCourt = async (body,token) => {
    try {
 
        const response = await axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/court/${body.id}}`,
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