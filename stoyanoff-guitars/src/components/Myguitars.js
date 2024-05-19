import React from 'react';
import { Link } from 'react-router-dom';
import './MyGuitars.css';

// Импортиране на изображения
import img1 from '../assets/images/guitars/IMG-20201117-WA0012.jpeg';
import img2 from '../assets/images/guitars/palemoon/239583059_200151315495354_4620092856851106522_n.jpg';
import img3 from '../assets/images/guitars/hellcaster/146740466_345012396620991_2020572833056794891_n.jpg';
import img4 from '../assets/images/guitars/LP_purple_Set.jpg';
import img5 from '../assets/images/guitars/blue_P90_335.jpg';

const Myguitars = () => {
    return (
        <div className="gallery-container">
            <h2>Моите Китари</h2>
            <div className="gallery">
                <div className="gallery-item">
                    <Link to="/guitar1">
                        <img src={img1} alt="Най-новият модел от Stoyanoff Guitars!" />
                        <p>Най-новият модел от Stoyanoff Guitars!</p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar2">
                        <img src={img2} alt="Тест на новата китара от Stoyanoff Guitars." />
                        <p>Тест на новата китара от Stoyanoff Guitars.</p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar3">
                        <img src={img3} alt="The Hellcaster" />
                        <p>The Hellcaster</p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar4">
                        <img src={img4} alt="Най-добрите материали за най-добрите инструменти." />
                        <p>Моята LP Inspired </p>
                    </Link>
                </div>
                <div className="gallery-item">
                    <Link to="/guitar5">
                        <img src={img5} alt="Blue 335, P90s pickups, standard edition specs." />
                        <p>Blue 335, P90s pickups, standard edition specs.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Myguitars;
