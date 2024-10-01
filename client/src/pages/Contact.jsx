import { useState } from "react"
import { useAuth } from "../store/auth"

const defaultContactform=({
    username:"",
    email:"",
    message:""
})
export const Contact =()=>{
    const [contact,setcontact]=useState(defaultContactform)
    const [userData,setUserData]=useState(true)
    const {user}=useAuth();
    if (userData && user) {
        setcontact({
            username:user.username,
            email:user.email,
            message:""
        },[userData, user])
        setUserData(false)
    }
    const handleInput =(e)=>{
  const name=e.target.name;
  const value=e.target.value;

  setcontact ({
    ...contact,
    [name]:value
  })
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();

        try {
            const response =await fetch ("http://localhost:5001/api/from/contact",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify(contact)
            })
            if(response.ok){
                setcontact(defaultContactform)
                const data=await response.json();
                console.log("responseok",data);
                
                alert("msg is send ");
            }
        } catch (error) {
            console.log("error")
        }
    }
    return(
    <section className="section-contact">
    <div className="contact-content container ">
       <h1 className="main-headung">contact us</h1>
    </div>
<div className="container grid grid-two-col">
    <div className="contact-img">
        <img src="./anime.PNG.jpg"/>
    </div>
    <section>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" id="username" autoComplete="off" required value={contact.username} onChange={handleInput}/>
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="text" name="email" id="email" autoComplete="off" required value={contact.email} onChange={handleInput} />
            </div>
            <div>
                <label htmlFor="message">message</label>
                <textarea type="text" name="message" id="message" autoComplete="off" required value={contact.message} onChange={handleInput}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
                   </form>
    </section>
</div>
<section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.7676745997123!2d72.83161777346285!3d19.184758048552627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ee06ebad2b%3A0x9c288235c433657d!2sInfiniti%20Mall!5e1!3m2!1sen!2sin!4v1724261813353!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
    </section>

    )
}