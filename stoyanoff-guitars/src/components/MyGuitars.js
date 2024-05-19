// src/components/MyGuitars.js
import React from 'react';
import '../App.css';

const MyGuitars = () => {
    return (
        <div className="gallery-container">
            <h2>Моите Китари</h2>
            <div className="gallery">
                <div className="gallery-item">
                    <img src="/images/IMG-20201117-WA0012.jpeg" alt="Най-новият модел от Stoyanoff Guitars!" />
                    <p>Най-новият модел от Stoyanoff Guitars!</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG-20201214-WA0005.jpeg" alt="Тест на новата китара от Stoyanoff Guitars." />
                    <p>Тест на новата китара от Stoyanoff Guitars.</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG-20201214-WA0003.jpeg" alt="Изработка на нов модел от Stoyanoff Guitars." />
                    <p>Изработка на нов модел от Stoyanoff Guitars.</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG_20200413_172633.jpg" alt="Най-добрите материали за най-добрите инструменти." />
                    <p>Най-добрите материали за най-добрите инструменти.</p>
                    <p>Likes: 225</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG-20201117-WA0012.jpeg" alt="Най-новият модел от Stoyanoff Guitars!" />
                    <p>Най-новият модел от Stoyanoff Guitars!</p>
                    <p>Likes: 150</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG-20201214-WA0005.jpeg" alt="Тест на новата китара от Stoyanoff Guitars." />
                    <p>Тест на новата китара от Stoyanoff Guitars.</p>
                    <p>Likes: 200</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG-20201214-WA0003.jpeg" alt="Изработка на нов модел от Stoyanoff Guitars." />
                    <p>Изработка на нов модел от Stoyanoff Guitars.</p>
                    <p>Likes: 175</p>
                </div>
                <div className="gallery-item">
                    <img src="/images/IMG_20200413_172633.jpg" alt="Най-добрите материали за най-добрите инструменти." />
                    <p>Най-добрите материали за най-добрите инструменти.</p>
                    <p>Likes: 225</p>
                </div>
            </div>
        </div>
    );
}

export default MyGuitars;