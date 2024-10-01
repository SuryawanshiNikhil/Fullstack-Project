import { Link } from "react-router-dom";
import "./Navbar.css"
import { useAuth } from "../src/store/auth";
export const Navbar = () => {
  const {isLoggedin}=useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="log-brand">
            <Link to="/">ThapaTechnical</Link>
          </div>
          <nav>
            <ul>
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/about">About</Link></li>
              <li> <Link to="/contact">Contact</Link></li>
              {isLoggedin ?<li> <Link to="/logout">logout</Link></li>: <><li> <Link to="/login">Login</Link></li> <li> <Link to="/register">Register</Link></li>

                </>
              }
              <li> <Link to="/service">Service</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
