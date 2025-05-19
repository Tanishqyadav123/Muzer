"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "./Context/AuthContext";

export default function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      localStorage.setItem("isAuthenticated", token);
      setIsAuthenticated(true);
    }

    if (isAuthenticated) router.replace("/"); // or any other route
  }, [isAuthenticated]);
  return (
    <>
      <h1>Hello My Profile Page</h1>
    </>
  );
}
