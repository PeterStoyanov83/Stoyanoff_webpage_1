import React, { useEffect } from 'react';
import img6 from '../assets/images/guitars/telecaster_2.jpg';
import './MyGuitars.css';

const Guitar6 = () => {
    useEffect(() => {
        // Ensure the Instagram embed script is loaded
        const script = document.createElement('script');
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="guitar-detail-container">
            <h2>Telecaster</h2>
            <img className="gallery-img" src={img6} alt="Най-добрите материали за най-добрите инструменти." />
            <div className="instagram-reel">
                <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/CLhjgIQAA5R/" data-instgrm-version="12">
                    <a href="https://www.instagram.com/p/CLhjgIQAA5R/">View this post on Instagram</a>
                </blockquote>
            </div>
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

export default Guitar6;
