import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ServiceRequest = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            navigate('/success'); // Redirect to Success page
        }, (error) => {
            console.log(error.text);
            alert('An error occurred, please try again.');
        });

        setFormData({
            name: '',
            email: '',
            service: '',
            message: ''
        });
    };

    return (
        <div className="service-request-container">
            <h2>Заявка за услуга</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Вашето име:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Вашият email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
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
                    <option value="hardware-change">Смяна на хардуер</option>
                    <option value="string-replacement">Смяна на струни</option>
                    <option value="custom-order">Специална поръчка</option>
                </select>
                <label htmlFor="message">Допълнителна информация:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Изпрати</button>
            </form>
        </div>
    );
};

export default ServiceRequest;
