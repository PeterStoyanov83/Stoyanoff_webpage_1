import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MyGuitars.css';

const MyGuitars = () => {
    useEffect(() => {
        console.log("MyGuitars component mounted");
    }, []);

    return (
        <div className="gallery-container">
            <h2>Моите Китари</h2>
            <div className="gallery">
                <div className="gallery-item">
                    <Link to="/guitar1">
                        <img src="/images/IMG-20201117-WA0012.jpeg" alt="Най-новият модел от Stoyanoff Guitars!" />
                        <p>Най-новият модел от Stoyanoff Guitars!</p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar2">
                        <img src="/images/IMG-20201214-WA0005.jpeg" alt="Тест на новата китара от Stoyanoff Guitars." />
                        <p>Тест на новата китара от Stoyanoff Guitars.</p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar3">
                        <img src="/images/IMG-20201214-WA0003.jpeg" alt="Изработка на нов модел от Stoyanoff Guitars." />
                        <p>Изработка на нов модел от Stoyanoff Guitars.</p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar4">
                        <img src="/images/IMG_20200413_172633.jpg" alt="Най-добрите материали за най-добрите инструменти." />
                        <p>Най-добрите материали за най-добрите инструменти.</p>
                        <p>Likes: 225</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default MyGuitars;
