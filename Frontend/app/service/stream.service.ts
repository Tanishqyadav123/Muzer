import axios from "axios";
import toast from "react-hot-toast";
export const createStreamService = async({streamName , socketId} : {streamName : string , socketId : string}) : Promise<any> => {
    
    const token = localStorage.getItem("isAuthenticated");
    
    try {
         const res : any = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/create` , {
             streamName,
             socketId
         } , {
           headers : {
             "authorization" : `Bearer ${token}`
           }
         })

         if (res.data) {
             toast.success(res.data.message);
         }

         return true;
    }
    catch (error : any) {
         toast.error(error?.response?.data?.message);
        return false;
    }

}


export const getAllStreams = async () : Promise<any> => {
    const token = localStorage.getItem("isAuthenticated");
    
    try {
         const allStreamsResponse : any= await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/stream/all` , {
             headers : {
                 "authorization" : `Bearer ${token}`
             }
         })

         console.log("is it calling " , allStreamsResponse)
         return allStreamsResponse.data.data;
    }
    catch (error : any) {
           toast.error(error?.response?.data?.message);
        return false;
    }

}