import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from 'react-toastify';

const URL="http://localhost:5001/api/v1/login"
export const Login =()=>{
    const [user,setuser]=useState({
       
        email :"",
       
        password:"",

    })
    const navigate = useNavigate(); // Correct usage of useNavigate
    const {serverTokenINS}=useAuth();
    const handaleInput =(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        
        setuser({
            ...user,
            [name]: value
        });
            }
const handleSubmit=async (e)=>{
e.preventDefault()
try {
    const response =await fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user) 
    }  )
    const res_data=await response.json();
    if(response.ok){
        serverTokenINS(res_data.token)
        setuser({ email :"", password:"",})
        toast.success("registration succesful")
        navigate("/")

    }
else{
    toast.error(res_data.extradetail ?res_data.extradetail :res_data.message )
}

} catch (error) {
    console.log(error)
}
console.log(user)

}    
    return(
        <>
        <section className="selection-content">
            <div className="contact-content container">
                <h1>Contact us</h1>
            </div>
            <div className="container grid grid-two-cols">
                <div className="">
                    <img src="" alt="we are looking for job">
                    </img>
                </div>
                <section className="section-form">
                  <form onSubmit={handleSubmit}>
                  
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" autoComplete="off" required value={user.email} onChange={handaleInput}/>
                    </div>
                   
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="text" name="password" id="password" autoComplete="off" required value={user.password} onChange={handaleInput}/>
                    </div>
                  
                    <div>
                        <button type="submit">submit</button>
                    </div>
                  </form>
                </section >
            </div>
        </section>
        </>
    )
}

