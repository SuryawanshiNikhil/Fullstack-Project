import { useEffect, useState } from "react";
import {  json, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
export const AdminUpdate=()=>{
    const [data,setdata]=useState({
        username:"",
        email:"",
        phone:""
    });
    const params=useParams();
    const {authorization}=useAuth();
    const getUserdata = async () => {
        try {
          const response = await fetch(`http://localhost:5001/api/adminroute/users/${params.id}`, {
            method: "GET",
            headers: {
              Authorization: authorization,
            },
          });
         const data =await response.json();
         console.log(data);
          setdata(data);
        } catch (error) {
          console.error("An error occurred while deleting the user", error);
        }
      };
    useEffect(()=>{
        getUserdata();
    },[])
    const handleInput=(e)=>{
let name =e.target.name;
let value=e.target.value;
setdata ({
    ...data,
    [name]:value
})
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await fetch(`http://localhost:5001/api/adminroute/users/update/${params.id}`, {
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: authorization,
              },
              body: JSON.stringify(data),
          });
  
          if (!response.ok) {
              const errorText = await response.text(); // Get the response text
              throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
          }
  
          const result = await response.json();
          alert("Update successful");
      } catch (error) {
          console.error("An error occurred while updating user data:", error);
      }
  };
  
    return (
        <>
       
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      required
                      value={data.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      required
                      value={data.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      required
                      value={data.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <button type="submit">UPDATE</button>
                  </div>
                </form>
             </>
      );
}