// React components and states import 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { useTab } from "../Contexts/navTab-Context";

// styles and images
import {BrandImages} from "../../assets/Brand/images";
import "./NavBar.css";


const NavBar = () => {
    const {tab, setTab} = useTab('/');
    
    const navLinks = [
        {
            name: "HOME",
            path: "/",
        },
        {
            name: "SERVICES",
            path: "/services",
        },
        {
            name: "ABOUT",
            path: "/about",
        },
        {
            name: "CONTACT",
            path: "/contact",
        },
    ];

    let tabIndex = navLinks.findIndex((link) => link.path == tab) ;
    if (tabIndex == -1){
    }
    const [activeTabIndex, setActiveTabIndex] = useState(tabIndex);
    
    useEffect(() => {
        console.log(tabIndex)
        const path = window.location.pathname;
        const index = navLinks.findIndex((link) => link.path === path);
        setActiveTabIndex(index);
    }, [tab]);

    const toggleMenu = (menu) => {
        menu.classList.toggle("active");
        const drop_down_menu = document.querySelector(
            ".drop-down-links-container"
        );
        drop_down_menu.classList.toggle("drop");
    };

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".drop-down-menu-container .menu")) {
            const drop_down_menu = document.querySelector(
                ".drop-down-links-container"
            );
            drop_down_menu.classList.remove("drop");

            const menu = document.querySelector(
                ".drop-down-menu-container .menu"
            );
            menu.classList.remove("active");
        }
    });

    let currPos = window.scrollY;
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        let newPos = window.scrollY;
        if (newPos < 100) {
            header.classList.remove("not_at_the_top");
            header.classList.remove("scrolled-down");
        } else if (newPos > currPos) {
            // if it is a scroll down and not at the top
            header.classList.add("scrolled-down");
            header.classList.add("not_at_the_top");
        } else {
            header.classList.remove("scrolled-down");
        }
        currPos = newPos;
    });

    return (
        <header>
            <nav className="navbar dark">
                <div className="brand-container">
                    <Link to="/" className="brand" onClick={() => setTab("/")}>
                        <div className="logo-container">
                            <img src={BrandImages.circleLogo} alt="Logo"/>
                        </div>
                        Utopia
                    </Link>
                </div>

                <ul className="nav-links-container">
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index} className="nav-links">
                                <Link
                                    to={link.path}
                                    className={
                                        activeTabIndex == index ? "active" : ""
                                    }
                                    onClick={() => setTab(link.path)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="drop-down-menu-container">
                    <div
                        className="menu"
                        onClick={(e) => toggleMenu(e.currentTarget)}
                    >
                        <div className="bars"></div>
                        <div className="bars"></div>
                    </div>

                    <ul className="drop-down-links-container drp">
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className={
                                            activeTabIndex == index
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => setTab(link.path)}
                                    >
                                        <RiArrowRightSLine className="right-arrow" />
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
