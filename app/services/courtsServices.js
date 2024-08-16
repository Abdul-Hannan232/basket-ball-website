import axios from "axios";
export const allCourts = async () =>{
    try {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
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