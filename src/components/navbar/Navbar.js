import "./Navbar.css";
import logo from "../../assets/img/Logo.svg"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <Link to="/">   <div className="navbar">
            <img src={logo} />
        </div>
        </Link>
    );
};

export default Navbar;