// src/components/Header.js
import React from 'react';
import logo from '../assets/images/logo/logo.png'; // Update the path
import { Link } from 'react-router-dom';
import "../App.css"

const Header = () => {
    return (
        <div className='container'>
         <header className="header">
            <div className="nav-bar">
                <img src={logo} alt="Logo" className="logo" width="30%" height="30%"  />
                <nav>
                    <ul>
                        <li><Link to="/">Начало</Link></li>
                        <li><Link to="/about">За Мен</Link></li>
                        <li><Link to="/services">Услуги</Link></li>
                        <li><Link to="/Myguitars">Моите Китари</Link></li>
                        <li><Link to="/contact">Контакт</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
        </div>
    );
};

export default Header;
