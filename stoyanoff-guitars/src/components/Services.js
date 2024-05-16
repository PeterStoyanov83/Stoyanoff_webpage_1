// src/components/Services.js
import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h2>Услуги</h2>
            <p>Ние предлагаме следните услуги:</p>
            <ul>
                <li>Сетъп</li>
                <li>Смяна на позиции</li>
                <li>Смяна на хардуер</li>
                <li>Изработване на нът/бридж</li>
                <li>Инспектиране на инструмент</li>
            </ul>
            <Link to="/service-request">Направете заявка за услуга</Link>
        </div>
    );
}

export default Services;
