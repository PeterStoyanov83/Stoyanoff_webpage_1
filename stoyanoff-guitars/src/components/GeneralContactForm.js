import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const GeneralContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h2>Свържете се с мен</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Име:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                           required/>
                </div>
                <label htmlFor="service">Услуга:</label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                >
                    <option value="">Изберете услуга</option>
                    <option value="setup">Сетъп</option>
                    <option value="hardware-change">Ремонт</option>
                    <option value="string-replacement">Преглед/инспекция на инструмент</option>
                    <option value="custom-order">Специална поръчка(направа на нов инструмент) </option>
                </select>
                <div className="form-group">
                    <label htmlFor="message">Съобщение:</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange}
                              required/>
                </div>
                <button type="submit">Изпрати</button>
            </form>
        </div>
    );
};

export default GeneralContactForm;
