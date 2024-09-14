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

export const validateToken = async (token) => {
    
    if (!token) {
        return { status: 401, message: "Token is required." };
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/validate-token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }), // directly pass the token
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json(); // Get the response data
        return data; // Return the response data
    } catch (error) {
        return { error: error.message }; // Return the error message or handle it accordingly
    }
    
}

export const socialMediaLogin = async (body) => {
    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/social-media-login`,
            body
        );

        return response; // Assuming you want to return the response
    }
    catch (error) {
        return error.response
    }
};

export const changePassword = async (body,token) => {
    try {
        const responce = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/change-password`, 
            body,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return responce
    }
    catch (error) {
        return error.response
    }
}
