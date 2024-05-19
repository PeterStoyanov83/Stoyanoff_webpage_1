import React, {useState} from 'react';
import img1 from '../assets/images/guitars/hellcaster/146730797_168450578159630_3200194035181302712_n.jpg';
import img2 from '../assets/images/guitars/hellcaster/146740466_345012396620991_2020572833056794891_n.jpg';
import img3 from '../assets/images/guitars/hellcaster/147090281_803998293523085_2992842169366484180_n.jpg';
import img4 from '../assets/images/guitars/hellcaster/147118936_3588369124582087_897597363862622247_n.jpg';
import img5 from '../assets/images/guitars/hellcaster/147464794_2586226958343972_5280937493404098859_n.jpg';
import img6 from '../assets/images/guitars/hellcaster/147465007_250490376517268_434094051163987945_n.jpg';
import './slideshow.css';

const images = [img1, img2, img3, img4, img5, img6];

const Guitar3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="guitar-detail-container">
            <h2>The Hellcaster</h2>
            <div className="slideshow-container">
                <button className="prev" onClick={prevSlide}>❮</button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
            <p>Един мой познат дойде при мен и каза "Искам китара, дошла от ада". Идеята ми беше да съчетая легендите за
                кръстовището и блус артистите, срещащи дявола там със семплата но класическа визия и звук на
                Телекастъра.</p>
            <p>Китарата е със стандартни спецификации.</p>
            <p>Хардуера е Гото и Бигзби.</p>
            <p>Електрониката е американска Stewmac - Golden Age Telecaster set. </p>
            <p></p>
            <p></p>

        </div>
    );
}

export default Guitar3;
