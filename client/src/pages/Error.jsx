import { NavLink } from "react-router-dom"

export const Error=()=>{
    return (
        <>
        <div className="error-page">
            <div className="content">
                <h1 className="header">404</h1>
                <h2>Sorry page not found</h2>
                <p>Lorem ipsum dolor, sit amet adipisicing elit. Doloribus quis  est voluptatibus fuga blanditii</p>
                <div className="btns">
                    <NavLink to="/">return home</NavLink>
                    <NavLink to="/contact">report problem</NavLink>
                    

                </div>
            </div>
        </div>
        </>
    )
}