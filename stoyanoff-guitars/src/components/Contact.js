// src/pages/Contact.js
import React from 'react';
import GeneralContactForm from './GeneralContactForm';
import '../App.css'
const Contact = () => {
    return (
        <div className="container">
            <h1 className="page-container">Контакти</h1>
            <GeneralContactForm />
        </div>
    );
};

export default Contact;
