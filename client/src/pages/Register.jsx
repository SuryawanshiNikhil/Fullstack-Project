import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
const {serverTokenINS}=useAuth();
const navigate = useNavigate(); // Initialize the navigate function

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        try {
            
        
        const response=await fetch(`http://localhost:5001/api/v1/register`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",

            },
            body:JSON.stringify(user)
        })
        const res_data=await response.json();
        console.log(res_data.extradetail ?res_data.extradetail :res_data.message )
        if (response.ok) {
            serverTokenINS(res_data.token)
            setUser({username: "",
                email: "",
                phone: "",
                password: ""})
                toast.success("registration succesful")
                navigate("/")
            }
            else{
                toast.error(res_data.extradetail ?res_data.extradetail :res_data.message )
            }
    }
    catch (error) {
            console.log(error)
    }
    };

    return (
        <section className="section-register">
            <div className="register-content container">
                <h1 className="main-heading">Register</h1>
            </div>
            <div className="container grid grid-two-col">
                <section>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                name="username" 
                                id="username" 
                                autoComplete="off" 
                                required 
                                value={user.username} 
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
                                value={user.email} 
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
                                value={user.phone} 
                                onChange={handleInput} 
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                id="password" 
                                autoComplete="off" 
                                required 
                                value={user.password} 
                                onChange={handleInput} 
                            />
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </section>
            </div>
        </section>
    );
};
