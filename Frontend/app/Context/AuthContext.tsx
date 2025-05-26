"use client";
import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";
interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => Promise<void>;
  logout: () => void;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  userId: string | null;
  setUserId: Dispatch<SetStateAction<string | null>>;
}
const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const currentPath = usePathname();

  let currentPathArr = ["/signin", "/verify-email", "verify-otp", "/signup"];
  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");

    if (!isAuth && !currentPathArr.includes(currentPath)) {
      router.push("/signin");
      setIsAuthenticated(false);
    } else if (currentPathArr.includes(currentPath) && isAuth) {
      router.push("/");
      setIsAuthenticated(true);
    }

    setIsLoading(true);
  }, []);

  const login = async (data: {
    email: string;
    password: string;
    rememberMe: boolean;
  }) => {
    try {
      console.log(process.env, "Process .env");
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL, "BACKEND URL");
      const res: any = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`,
        data
      );

      console.log(res.data);
      toast.success(res.data?.message, {
        duration: 1000,
      });

      // Set  the key in the localStorage :-
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", res.data?.data?.token);
      const decodedData: any = jwt.decode(res.data?.data?.token);
      setUserId(decodedData?.userId);
      router.push("/");
    } catch (error: any) {
      console.log(error?.response.data.message);
      toast.error(error?.response.data.message, {
        duration: 1000,
      });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserId(null);
    localStorage.removeItem("isAuthenticated");
    console.log("is Pushing to signin");
    router.push("/signin");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        login,
        logout,
        userId,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook for fetching the data from AuthContext :-
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Error in AuthContext");
  }
  return context;
};
