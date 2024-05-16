// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Stoyanoff Guitars</h1>
            <nav>
                <ul>
                    <li><Link to="/">Начало</Link></li>
                    <li><Link to="/about">За нас</Link></li>
                    <li><Link to="/products">Продукти</Link></li>
                    <li><Link to="/services">Услуги</Link></li>
                    <li><Link to="/gallery">Галерия</Link></li>
                    <li><Link to="/contact">Контакт</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
