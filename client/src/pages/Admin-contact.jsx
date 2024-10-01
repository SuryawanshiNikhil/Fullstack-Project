import { useEffect, useState } from "react"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
export const Admincontact =()=>{
    const [contacts,setcontact]=useState([]);
const {authorization}=useAuth();
   const getAllcontact=async()=>{
 try {
    const response=await fetch(`http://localhost:5001/api/adminroute/contacts`,{
        method:"GET",
        headers:{
                          Authorization: authorization,

        }
    });
    const data= await response.json();
    console.log("data",data)
if (response.ok) {
    setcontact(data);
}
 } catch (error) {
    
 }
   }
   

const deleteContactId=async(id)=>{
try {
    const response=await fetch(`http://localhost:5001/api/adminroute/contacts/delete/${id}`,{
        method:"DELETE",
        headers:{
            Authorization: authorization,

        }
    })
    if(response.ok){
        getAllcontact();
        toast.success("delete succesfully")

    }
    else{
        toast.error("not deleted")
    }
} catch (error) {
    next(error)
}
}

useEffect(()=>{
    getAllcontact();
},[])
    return(<>
     <div className="contactRoute">
        {contacts.map((curdata,index)=>{
const {username,email,message,_id}=curdata;
return(
    <div className="contacsss" key={index}> 
<p>username:{username}</p>
<p>Email:{email}</p>
<p>Message:{message}</p>
<button className="btn" onClick={()=>{deleteContactId(_id)}}>Delete</button>
    </div>
)
        })}
     </div>
    </>)
    }