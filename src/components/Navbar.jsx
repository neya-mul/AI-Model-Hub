import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.png"
import Cart from "./Cart";
const NavBar = ({ isAdded, setIsAdded }) => {


    return (
        <div className="navbar fixed z-10 bg-base-100 shadow-sm">
            <div className="navbar-start">

                <img src={logo} className="w-15 h-fit" alt="" />
                <a className=" text-2xl font-bold" >Ai Hub</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <span className="text-red-400 btn rounded-full"> <FaShoppingCart /> {isAdded.length}</span>
                <a className="btn rounded-2xl bg-red-500 p-2 text-white hidden lg:block" >Get Started</a>
            </div>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-5 w-40 p-2 -left-25 shadow">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Services</a></li>
                    <li><a>Contact</a></li>
                    <a className="btn rounded-2xl bg-red-500 text-white" >Get Started</a>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;