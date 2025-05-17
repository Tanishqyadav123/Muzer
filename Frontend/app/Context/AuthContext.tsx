"use client";

import axios   from 'axios';
import {createContext, Dispatch, SetStateAction, useContext, useEffect, useState} from 'react'
import toast from 'react-hot-toast';
import { usePathname , useRouter } from 'next/navigation';
interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: { email: string; password: string; rememberMe: boolean }) => Promise<void>;
  logout: () =>void;
  isLoading : boolean;
}
const AuthContext = createContext<AuthContextType | null>(null);


export const AuthContextProvider = ({children} : {children : React.ReactElement})  =>{
      
  const [isAuthenticated , setIsAuthenticated] = useState<boolean>(false) 
  const [isLoading , setIsLoading] = useState(true)
  const router = useRouter();
  const currentPath = usePathname();
  
   let currentPathArr = ['/signin' , '/verify-email' , 'verify-otp' , '/signup'];
  useEffect(() =>{
     const isAuth = localStorage.getItem("isAuthenticated");
    console.log("Is  " , isAuth)
    console.log("Current Path" , currentPath)
     if (!isAuth && !currentPathArr.includes(currentPath)) {

         router.push('/signin')
           setIsAuthenticated(false);
     }
     else if (currentPathArr.includes(currentPath) && isAuth)   {
         router.push('/')
        setIsAuthenticated(true);
     }

     setIsLoading(true)

  } , [])

  const login = async (data: {email : string , password : string , rememberMe : boolean})  =>{
    
     try {
      console.log(process.env.NEXT_PUBLIC_BACKEND_URL , "BACKEND URL")
      const res : any = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin` , data );


      console.log(res.data)
        toast.success(res.data?.message , {
          duration : 1000
       })

       // Set  the key in the localStorage :-
       setIsAuthenticated(true);
       localStorage.setItem("isAuthenticated" , res.data?.data?.token);
        router.push('/')
    }
    catch (error : any) {
       console.log(error?.response.data.message);
       toast.error(error?.response.data.message , {
          duration : 1000
       })

    }


  }


  const logout =  ()  => { 
    
      setIsAuthenticated(false);

      localStorage.removeItem("isAuthenticated");

      router.push('/signin')

  }


  return (
    <AuthContext.Provider value={{isAuthenticated , isLoading , login , logout}}>
        {children}
    </AuthContext.Provider>
  )

}


// Create a hook for fetching the data from AuthContext :-
export const useAuth = () =>{
     const context = useContext(AuthContext);
     if (!context) {
         throw new Error("Error in AuthContext")
     }
     return context;
}