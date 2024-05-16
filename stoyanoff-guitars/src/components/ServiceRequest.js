// src/components/ServiceRequest.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceRequest = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        service: 'setup',
        message: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Обработване на формата, например изпращане на email
        navigate('/success');
    }

    return (
        <div>
            <h2>Заявка за услуга</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Вашето име:</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Вашият email:</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Услуга:</label>
                    <select name="service" value={form.service} onChange={handleChange} required>
                        <option value="setup">Сетъп</option>
                        <option value="position_change">Смяна на позиции</option>
                        <option value="hardware_change">Смяна на хардуер</option>
                        <option value="nut_bridge">Изработване на нът/бридж</option>
                        <option value="inspection">Инспектиране на инструмент</option>
                    </select>
                </div>
                <div>
                    <label>Допълнителна информация:</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit">Изпрати</button>
            </form>
        </div>
    );
}

export default ServiceRequest;
