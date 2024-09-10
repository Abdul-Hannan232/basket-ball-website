import { useSession } from "next-auth/react";
import Cookies from "js-cookie";
import {jwtDecode} from "jwt-decode";

export const useAuthToken = () => {
  const { data: session } = useSession();

  const token = session?.authToken || Cookies.get("authToken");

  let decodedToken = null;
  if (token) {
    try {
      decodedToken = jwtDecode(token);
    } catch (error) {
      console.error("Invalid token:", error.message);
    }
  }

  return { token, decodedToken };
};
