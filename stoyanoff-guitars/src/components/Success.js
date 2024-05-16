// src/components/Success.js
import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div>
            <h2>Успешно изпратена заявка</h2>
            <p>Вашата заявка за услуга беше успешно изпратена. Ще се свържем с вас скоро.</p>
            <Link to="/">Върнете се към началната страница</Link>
        </div>
    );
}

export default Success;
