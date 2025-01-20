import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useNavigate }   from 'react-router-dom';

const NavBar = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const navLinks = [
        {
            name: "Home", path: "/"
        },
        {
            name: "About", path: "/about"
        },
        {
            name: "Contact", path: "/contact"
        },
    ];

    useEffect( ()=>{
        const path = window.location.pathname;
        const index = navLinks.findIndex(link => link.path === path);
        setActiveTabIndex(index);
    }, [window.location.pathname])

    return (
        <header>
            <nav className="navbar dark">
                <div className="brand-container">
                    <Link to ="/" className="brand" onClick={()=>setActiveTabIndex(0)}>
                        Utopia
                    </Link>
                </div>

                <ul className="nav-links-container">
                    {navLinks.map((link, index)=>{
                        return (
                            <li key={index} className= "nav-links" >
                                <Link 
                                    to={link.path} 
                                    className={activeTabIndex == index ? "active" : ''} 
                                    onClick={()=>setActiveTabIndex(index)}
                                    >
                                    {link.name}
                                </Link>
                            </li>
                        )
                        })
                    }          
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
