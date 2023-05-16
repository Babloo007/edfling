import React, { useState } from "react";


import logo from "../../images/Frame 1000004410.png";
import './navbar.css';

function Navbar(){


    const [toggleBar, setToggleBar] = useState("off");

    function barToggle(){
        // console.log("Clicked");
        if(toggleBar==='off'){
            setToggleBar('on');
        }
        else if(toggleBar==='on'){
            setToggleBar('off');
        }
    }

    return (
        <div>
            <div className="navbar">
                <img className="logo" src={logo} alt="Edfling" />
                <ul className="navbar_links">
                    <a href="/experts"><li>Experts</li></a>
                    <a href="/blog"><li>Blog</li></a>
                    <a href="/"><li>Founders Program</li></a>
                    <a href="/"><li>For Buisness</li></a>
                </ul>
                <div>
                    <a href="/signup"><button className="login">Login</button></a>
                    {/* <button className="login">Login</button> */}
                </div>
                <button className="option_bar" onClick={barToggle}><i className="fa-solid fa-bars"></i></button>
            </div>
            
            {
                toggleBar==='on' ? <>
                <div className="menuItem">
                    <a href="/experts">Experts</a>
                    <a href="/">Blog</a>
                    <a href="/">Founders Program</a>
                    <a href="/">For Buisness</a>
                </div>
                </>
                : 
                <></>

            }
        </div>
    )
}

export default Navbar;