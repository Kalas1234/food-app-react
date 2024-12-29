import React, { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
const Header = () => {
    
    const[btnNmaeReact, setBtnNameReact] = useState('Login')
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        console.log('useEffect called')
    }, [btnNmaeReact])

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
                    <div className="Link">
                        <li>Status : {onlineStatus===true ? '✅' : '🔴'}</li>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About us</Link>
                        <Link to='/contact'>Contact</Link>
                        <Link to='/grocery'>Grocery</Link>
                        <button className="login" onClick={() => {
                            btnNmaeReact === 'Login' ? setBtnNameReact('Logout') : setBtnNameReact('Login')
                        }} >
                            {btnNmaeReact}
                        </button>
                    </div>

                </ul>
            </div>

        </div>
    );
};

export default Header;