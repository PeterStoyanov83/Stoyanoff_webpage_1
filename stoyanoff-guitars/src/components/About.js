// src/pages/About.js
import React from 'react';
import aboutImage from '../assets/images/about/Copy of 4545SuEvMark.jpg'; // Update the path
import '../App.css'
const About = () => {
    return (
        <div className="container">
            <h1 className="page-container">За Мен</h1>
            <img className="about-image" src={aboutImage} alt="About me" />
            <p>Здравейте! Казвам се Петър и съм човекът зад Stoyanoff Guitars. Създавам ръчно изработени китари с
                огромна любов и внимание към детайла. Всяка китара, която правя, е уникална и вдъхновена от страстта ми
                към музиката. За мен е важно да създавам инструменти, които не само звучат невероятно, но и ви
                вдъхновяват да свирите и да творите. Ако търсите китара, която да отразява вашата индивидуалност и стил,
                тук сте на правилното място. Присъединете се към музикалното ми семейство и нека творим заедно!
            </p>
        </div>
    );
};

export default About;

