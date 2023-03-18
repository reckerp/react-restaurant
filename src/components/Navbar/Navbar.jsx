import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";

import images from "../../constants/images";
import './Navbar.css';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.gericht} alt="Gericht"/>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#menu">Menu</a></li>
                <li className="p__opensans"><a href="#awards">Awards</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="" className="p__opensans">Log In / Register</a>
                <div/>
                <a href="" className="p__opensans">Book a table</a>
            </div>
            <div className="app__navbar-small-screen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                    <div className="app__navbar-small-screen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close"
                                                 onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-small-screen_links">
                            <li className="p__opensans"><a href="#home">Home</a></li>
                            <li className="p__opensans"><a href="#about">About</a></li>
                            <li className="p__opensans"><a href="#menu">Menu</a></li>
                            <li className="p__opensans"><a href="#awards">Awards</a></li>
                            <li className="p__opensans"><a href="#contact">Contact</a></li>
                            <hr/>
                            <li className="p__opensans"><a href="">Log In / Register</a></li>
                            <li className="p__opensans"><a href="">Book a table</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;
