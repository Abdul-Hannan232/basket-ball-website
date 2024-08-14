"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { validateToken } from "../services/authServices";

function withAuth(WrappedComponent) {
    const AuthenticatedComponent = (props) => {
        const router = useRouter();
        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            const verifyToken = async () => {
                const token = localStorage.getItem("authToken");

                if (!token) {
                    toast.error("Please log in to proceed.");
                    router.replace("/"); // Redirect to login if no token
                    return;
                }
                const response = await validateToken();

                console.log("Token verification response:", response);

                if (response.status === 200) {
                    setIsAuthenticated(true); // Token is valid, proceed
                } else {
                    localStorage.removeItem("authToken");
                    toast.error("Invalid session. Please log in again.");
                    router.replace("/"); // Redirect to login if the token is invalid
                }
            };

            verifyToken();
        }, [router]);

        if (!isAuthenticated) {
            return null; // or a loading spinner, to prevent the component from rendering until authentication is confirmed
        }

        return <WrappedComponent {...props} />;
    };

    return AuthenticatedComponent;
}

export default withAuth;
