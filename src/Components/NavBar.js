import React from "react";
import {NavLink} from "react-router-dom";

const nav_show = () => {
    document.body.classList.toggle("navigation-is-open");
};

const NavBar = () => {
    return (
        <div className="col-md-2  bg-dark navbar">
            <NavLink to="#cd-nav" className="cd-nav-trigger" onClick={nav_show}>
                {" "}
                Menu
                <span className="cd-nav-icon"></span>
                <svg
                    x="0px"
                    y="0px"
                    width="54px"
                    height="54px"
                    viewBox="0 0 54 54"
                >
                    <circle
                        fill="transparent"
                        stroke="#656e79"
                        stroke-width="1"
                        cx="27"
                        cy="27"
                        r="25"
                        stroke-dasharray="157 157"
                        stroke-dashoffset="157"
                    ></circle>
                </svg>
            </NavLink>

            <div id="cd-nav" className="cd-nav">
                <div className="cd-navigation-wrapper" id="cd-navigation-wrapper">
                    <div clasclassName="cd-half-block">
                        <h2 className="text-white">Navigation</h2>

                        <nav>
                            <ul className="cd-primary-nav">
                                <li>
                                    <NavLink to="/" className="selected">
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Our services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Our projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Contact us</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
