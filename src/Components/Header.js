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
        <div className="flex bg-pink-50 shadow-lg justify-between">
            <div className="log-container">
                <img
                    src={LOGO_URL}
                    className="w-56"
                />
            </div>

            <div className="flex items-center">
                <ul>
                    <div className="flex p-4 m-4 ">
                        <li className="px-4">Status : {onlineStatus===true ? '✅' : '🔴'}</li>
                        <Link className="px-4" to='/'>Home</Link>
                        <Link className="px-4" to='/about'>About us</Link>
                        <Link className="px-4" to='/contact'>Contact</Link>
                        <Link className="px-4" to='/grocery'>Grocery</Link>
                        <button className="border-2 border-black py-1 px-4 shadow-lg rounded-md" onClick={() => {
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