import { Navigate, NavLink, Outlet } from "react-router-dom"
import { useAuth } from "../../src/store/auth"

export const Adminlayout=()=>{
    const {user,isLoading}=useAuth();
    if (isLoading) {
        return <h1>isLoading....</h1>
    }
    if (!user.isAdmin) {
       return <Navigate to="/"/>
    }
    console.log("user",user)
return (

    <>
    <header>
        <div className="container">
       <nav>
        <ul>
            <li> <NavLink to="/admin/users">user</NavLink></li>
            <li><NavLink to="/admin/contact">Contact</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            <li><NavLink to="/">Home</NavLink></li>
        </ul>
       </nav>
        </div>
    </header>
    <Outlet/>
    </>
)
}
