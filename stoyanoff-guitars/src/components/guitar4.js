import React from 'react';
import img4 from '../assets/images/guitars/LP_purple_Set.jpg';
import './slideshow.css'
import '../App.css'
const Guitar4 = () => {
    return (
        <div className="guitar-detail-container">
            <h2>LP Inspired guitar</h2>
            <img src={img4} alt="Най-добрите материали за най-добрите инструменти."/>
            <ul>
                <li><strong>Тяло:</strong></li>
                <ul>
                    <li>Ламиниран корпус със отделен топ.</li>
                    <li>Масивно тяло</li>
                    <li>Кленово "Spalted" фурнир.</li>
                    <li>Махагонови гръб</li>
                    <li>Оформена шийка от махагон с двупосочен тръс род.</li>
                    <li>Дължина на мензурата: 24-9/16" (623.88mm).</li>
                </ul>
                <li><strong>Гриф:</strong></li>
                <ul>
                    <li>Гриф от Грандила с Никел-хром медиум прагчета и перлени точкови инлеи.</li>
                    <li>Нът от кост.</li>
                </ul>
                <li><strong>Хардуер:</strong></li>
                <ul>
                    <li>Хромирани хардуер</li>
                </ul>
            </ul>
        </div>
)
    ;
}

export default Guitar4;
