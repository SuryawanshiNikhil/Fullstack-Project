import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";
export const Logout=()=>{
    const navigate = useNavigate(); // Correct usage of useNavigate

    const {Logoutuser}=useAuth();
    useEffect(()=>{
        Logoutuser();
    },[Logoutuser])

 return <navigate to="/registerf"/>

}