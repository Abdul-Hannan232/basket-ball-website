// components/withAuth.tsx or utils/withAuth.tsx
"use client";
import { useEffect, ComponentType } from "react";
import { useRouter } from "next/navigation";
function withAuth<T>(WrappedComponent: ComponentType<T>) {
    const AuthenticatedComponent = (props: T) => {
        const router = useRouter();

        useEffect(() => {
            const token = localStorage.getItem("authToken");
            if (!token) {
                router.replace("/");
            }
        }, [router]);

        // Render the wrapped component only if authenticated
        return (<WrappedComponent {...props} />)
    };

    return AuthenticatedComponent;
}

export default withAuth;
