// src/components/Logo.js
import React from 'react';

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 200">
    <style type="text/css">
      {`
        @font-face {
          font-family: 'Ligatures-script';
          src: url('../assets/fonts/ligatures-script-Regular.woff2') format('woff2'),
               url('../assets/fonts/ligatures-script-Regular.woff') format('woff'),
               url('../assets/fonts/ligatures-script-Regular.ttf') format('truetype');
        }
        .st0 { fill: #FFFFFF; }
      `}
    </style>
    <rect width="80%" height="80%" style={{ fill: '#000021' }} />
    <text x="50%" y="60%" dominantBaseline="left" textAnchor="middle" fontFamily="Ligatures-script"
          fontSize="200" fill="white">Stoyanoff
    </text>
    <text x="58%" y="67%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="30"
          fill="white">Guitars
    </text>
  </svg>
);

export default Logo;
