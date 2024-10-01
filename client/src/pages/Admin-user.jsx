import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
import {Link} from "react-router-dom"
export const Adminusers =()=>{
    const [user,setuser]=useState([])
    const {authorization}=useAuth();
    const getAlluserData= async()=>{
try {
    const response=await fetch(`http://localhost:5001/api/adminroute/users`,{
        method:"GET",
        headers:{
            Authorization:authorization,
        }
    })
    const data =await response.json()
    console.log(data)
    setuser(data)
} catch (error) {
    
}
    }
    const deleteUser = async (id) => {
        try {
          const response = await fetch(`http://localhost:5001/api/adminroute/users/delete/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: authorization,
            },
          });
         const data =await response.json();
         console.error(data);
if (response.ok){
    getAlluserData();

}
        } catch (error) {
          console.error("An error occurred while deleting the user", error);
        }
      };
    useEffect (()=>{
        getAlluserData();
    },[])
return( <>
<section className="admin-user-section">
    <div className="container">
        <h1>Con</h1>
        </div>
        <div className="container admin-user">
<table>
    <thead>
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Updata</th>
    <th>Delete</th>
</tr>
    </thead>
    <tbody>
    {user.map((curUser,Index)=>{
return <tr key={curUser._id}>
    <td>{curUser.username}</td>
    <td>{curUser.email}</td>
    <td>{curUser.phone}</td>
    <td>
        <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
        </td>
    <td><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
</tr>
})}
    </tbody>
</table>

</div>
</section>
</>
)
}