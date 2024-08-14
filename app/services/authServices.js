import axios from "axios";
export const loginUser = async (body) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            body
        );
        return response; // Assuming you want to return the response
    }
    catch (error) {
        return error.response
    }
};

export const SignupUser = async (body) => {
    try {
        const responce = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/register`, body
        )
        return responce
    }
    catch (error) {
        return error.response
    }
}

export const ForgetPasswordUser = async (body) => {
    try {
        const responce = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, body
        )
        return responce
    }
    catch (error) {
        return error.response
    }
}
export const ResetPasswordApi = async (body) => {
    try {
        const responce = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`, body
        )
        return responce
    }
    catch (error) {
        return error.response
    }
}

export const validateToken = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
        
        return { status: 401, message: "Token is required." };
    }

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`,
            { token }  // directly pass the token
        );
        
        return response;
    } catch (error) {
         
        return error.response; // or throw the error if you want to handle it outside
    }
}