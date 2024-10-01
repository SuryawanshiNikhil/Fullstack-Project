import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";


export const About = () => {
    const {user}=useAuth();
    return (
        <section className="section-about">
            <div className="about-content container">
                <h1 className="main-heading">Hello {user ?`${user.username} to our website`:`to our website`}</h1>
                <p className="about-description">
                    Welcome to the About page. This section provides information about the purpose of this website, its creators, and other relevant details. Feel free to explore and learn more about what we do.
                </p>
                <div className="about-image">
                    <img src="./anime.PNG.jpg" alt="About" width="400" height="300" />
                </div>
            </div>
            <div className="btn btn-group">
            <NavLink to="/contact">
                <button className="btn">connect now</button>
            </NavLink>
            <button className="btn secondary-btn">lund more</button>
            </div>
        </section>
    );
};
