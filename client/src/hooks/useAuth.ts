import { useState } from "react";
import {useRouter} from "next/navigation";
import api from "../lib/api";
import { refresh } from "next/cache";

export function useAuth(){


    const [loading,setLoading]= useState(false);
    const [error,setError]=useState<string|null>(null);
    const router = useRouter();

    const register = async (userData:any)=>{
        setLoading(true);
        setError(null);
        try{
           
            const response = await api.post("/account/register/", userData);
            if(response.status===201){
                
                setTimeout(() => {
                    router.push('/login');
                }, 1500);
            }
        }
        catch(err:any){
                const errorMessage =
            err.response?.data?.detail ||
            err.response?.data?.message ||
            Object.values(err.response?.data || {}).flat().join(', ') ||
            'An error occurred during registration';
        
            setError(errorMessage);
            throw err;
        }
        finally{
            setLoading(false);
        }

    };
    const login = async (userData:any)=>{
        setLoading(true);
        setError(null);
        try{
            const response = await api.post("/account/login/", userData);
            if(response.status===200){
                if(response.data?.token){
                    localStorage.setItem("token", response.data.token);
                }
                setTimeout(() => {
                    router.push('/dashboard');
                }, 500);
            }
        }
        catch(err:any){
                const errorMessage =
            err.response?.data?.detail ||
            err.response?.data?.message ||
            Object.values(err.response?.data || {}).flat().join(', ') ||
            'An error occurred during login';
        
            setError(errorMessage);
            throw err;
        }
        finally{
            setLoading(false);
        }
        
    }
    const logout=async()=>{
        try{
            const refreshToken=localStorage.getItem("refresh_token")

            if(refreshToken){
                await api.post("/account/logout/",{refresh:refreshToken});
            }


        }catch(error){
                console.error("خطأ أثناء تسجيل الخروج من السيرفر:", error);
        }
        finally{
            localStorage.removeItem("token");
             localStorage.removeItem("refresh_token");


        }
        router.push("/login");
    }
    return {register,login,logout,loading,error};

  
}