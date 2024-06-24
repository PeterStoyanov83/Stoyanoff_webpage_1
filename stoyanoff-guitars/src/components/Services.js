// src/components/Services.js
import React from 'react';

import '../App.css'



const Services = () => {
  return (
    <div className="services-container">
      {/*<div className="services-background">*/}
      {/*  <img src="../assets/services/image1.jpg" alt="refret" />*/}
      {/*  <img src="../assets/services/image2.jpg" alt="neck repair" />*/}
      {/*  <img src="../assets/services/image3.jpg" alt="setup" />*/}
      {/*  <img src="../assets/services/image4.jpg" alt="Service 4" />*/}
      {/*  <img src="../assets/services/image5.jpg" alt="Service 5" />*/}
      {/*  <img src="../assets/services/image1.jpg" alt="Service 1" /> /!* Repeat the first image for smooth transition *!/*/}
      {/*</div>*/}
      <div className="services-content">
        <h2>Ремонт и Ъпгрейд услуги: </h2>
        <ul>
                <li>Сетъп</li>
                <li>Смяна на позиции </li>
                <li>Смяна на хардуер </li>
                <li>Изработване на нът/бридж</li>
                <li>Проверка и подмяна/поправка на електроника</li>
                <li>Инспектиране на инструмент</li>
            </ul>

          <a href="/contact"><button>Свържете се с нас</button> </a>
      </div>
    </div>
  );
};

export default Services;
