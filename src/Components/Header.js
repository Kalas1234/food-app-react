import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
    
    const [btnNmaeReact, setBtnNameReact] = useState('Login')
    return (
        <div className="header">
            <div className="log-container">
                <img
                    src={LOGO_URL}
                    className="logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <button className="login" onClick={() => {
                        btnNmaeReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login')
                    }} >
                        {btnNmaeReact}
                    </button>
                </ul>
            </div>

        </div>
    );
};

export default Header;