// "use client"
import { jwtDecode } from 'jwt-decode'; // 1. Import jwt-decode
const roleBased = (token, router) => {
    try {
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;
        userRole === 'admin' ? router.replace("/admin") : router.replace("/home");
    } catch (error) {
        router.replace("/"); // Redirect to login if there's an issue with decoding or role
    }
}

export default roleBased
