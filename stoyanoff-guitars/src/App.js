import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import MyGuitars from './components/MyGuitars';
import Contact from './components/Contact';
import ServiceRequest from './components/ServiceRequest';
import Success from './components/Success';
import './App.css';



function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/MyGuitars" element={<MyGuitars />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/service-request" element={<ServiceRequest />} />
                    <Route path="/success" element={<Success />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;