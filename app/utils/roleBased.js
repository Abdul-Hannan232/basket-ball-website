"use client"
import {jwtDecode} from 'jwt-decode'; // Correct import
const roleBased = (token, router) => {
    try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;
        if (userRole === 'admin') {
            router.replace('/admin'); // Redirect admin to /admin
        } else if (userRole === 'user') {
            router.replace('/home'); // Redirect user to /home
        } else {
            throw new Error('Unknown role');
        }
    } catch (error) {
        console.error('Role-based redirection failed:', error);
        router.replace('/'); // Redirect to login if there's an issue with decoding or role
    }
}

export default roleBased;
