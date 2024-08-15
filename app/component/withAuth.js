"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { validateToken } from "../services/authServices";
import clearAuthToken from "../utils/clearAuthToken";
function withAuth(WrappedComponent) {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null to handle loading state

        useEffect(() => {
            const verifyToken = async () => {
                const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

                if (!token) {
                    router.replace("/"); // Redirect to login if no token
                    return;
                }

                try {
                    const response = await validateToken();
                    response.status === 200 ? setIsAuthenticated(true) : router.replace("/");
                } catch (error) {
                    clearAuthToken()
                    router.replace("/"); // Redirect to login if the token is invalid
                }
            };

            verifyToken();
        }, [router]);

        if (isAuthenticated === null) {
            return null; // or a loading spinner, to prevent the component from rendering until authentication is confirmed
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
}

export default withAuth;
