import React, {useState} from 'react';
import img1 from '../assets/images/guitars/palemoon/239583059_200151315495354_4620092856851106522_n.jpg';
import img2 from '../assets/images/guitars/palemoon/231294096_143399071268690_8903589350833647743_n.jpg';
import img3 from '../assets/images/guitars/palemoon/182696520_4236633399701950_2770955799849054575_n.jpg';
import './slideshow.css';

const images = [img1, img2, img3 ];

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
            <h2>The Pale Moon</h2>
            <div className="slideshow-container">
                <button className="prev" onClick={prevSlide}>❮</button>
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`}/>
                <button className="next" onClick={nextSlide}>❯</button>
            </div>
            <p></p>
            <p>Китарата е спецификациите на Ibanez Gem но с една основна разлика - Грифа е extended до баритон. Добавих 3 допълнителни прагчета в началото на грифа.</p>
            <p>Хардуера е стандарден хард тейл Ibanez Bridge .</p>
            <p>Електрониката е  Black winter set . </p>
            <p></p>
            <p></p>

        </div>
    );
}

export default Guitar3;
