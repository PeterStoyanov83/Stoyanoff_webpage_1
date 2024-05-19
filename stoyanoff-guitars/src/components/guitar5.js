import React from 'react';
import img6 from '../assets/images/guitars/blue_P90_335.jpg';
import "./MyGuitars.css"
const Guitar5 = () => {
    return (
        <div className="guitar-detail-container">
            <h2>LP Inspired guitar</h2>
            <img src={img6} alt="Най-добрите материали за най-добрите инструменти."/>
            <ul>
                <li><strong>Тяло:</strong></li>
                <ul>
                    <li>Пресован ламиниран полу-кух корпус с централен блок — точно като оригиналите.</li>
                    <li>Кленово флейм покритие на горната част.</li>
                    <li>Махагонови гръб и страни.</li>
                    <li>Оформена шийка от махагон с двупосочен тръс род.</li>
                    <li>Дължина на мензурата: 24-9/16" (623.88mm).</li>
                </ul>
                <li><strong>Гриф:</strong></li>
                <ul>
                    <li>Гриф от Грандила с Никел-хром медиум прагчета и перлени точкови инлеи.</li>
                    <li>Предварително прорязан нът за перфектно действие.</li>
                </ul>
                <li><strong>Хардуер:</strong></li>
                <ul>
                    <li>Хромирани хардуер</li>
                </ul>
            </ul>
        </div>
    );
}

export default Guitar5;
