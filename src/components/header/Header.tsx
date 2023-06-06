import React from 'react';
import "./Header.scss";
import Logo from "../../assets/Logo.png";

const Header = () => {
    return (
        <div className='header'>
            <div className='header_wrap container'>
                <div className='logo'>
                    <img src={Logo} alt='Logo Image' />
                    <span>Minh Nguyen</span>
                </div>
            </div>
        </div>
    )
}

export default Header
