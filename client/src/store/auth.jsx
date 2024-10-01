import React, { createContext, useContext, useState,useEffect } from "react";

export const AuthContext=createContext();

export const AuthProvider =({children})=>{
    const [token,settoken]=useState(localStorage.getItem("token"))
    const [user,setuser]=useState("")
    const [isLoading,setLoading]=useState(true)
    const[servicess,setservice]=useState([]);
    const authorization= `Bearer ${token}`;
    const serverTokenINS=(serverToken)=>{
        settoken(serverToken)
return localStorage.setItem("token",serverToken)
    }
    //tackling logout page
let isLoggedin=!!token;
    const Logoutuser=()=>{
        settoken("")
        return localStorage.removeItem("token")
    }

    //Authotication jwt  get currently logged in userData
const useAuthetication=async()=>{
    try {
        setLoading(true)
        const response =await fetch("http://localhost:5001/api/v1/user",{
method:"GET",
headers:{
    Authorization:authorization,
},

        })
        console.log("Ok")
        if (response.ok) {
            const data = await response.json();
            console.log("User data:", data.userData);
            setuser(data.userData);
            setLoading(false)
          } else {
            console.log("isloading");
            setLoading(false)
          }
        
    } catch (error) {
        console.log("Something went wrong during authentication:", error);
    }
}
    //to services card logic 
    const getservices =async ()=>{
try {
    const response =await fetch("http://localhost:5001/api/data/service",
        {
            method:"GET"
        }
    )
    if (response.ok){
        const data=await response.json();
        console.log(data.msg)
        setservice(data.msg)
    }
} catch (error) {
    console.log(`error is ${error}`)
}
    }
useEffect(()=>{
    getservices();
    useAuthetication();
},[])
return <AuthContext.Provider value={{serverTokenINS,Logoutuser,isLoggedin,user,servicess,authorization,isLoading}}>
{children}
</AuthContext.Provider>
}


export const useAuth=()=>{
    const authcontextValue=useContext(AuthContext)
    return authcontextValue
}