import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Myguitars from './components/Myguitars';
import Contact from './components/Contact';
import ServiceRequest from './components/ServiceRequest';
import Success from './components/Success';
import Guitar1 from './components/guitar1';
import Guitar2 from './components/guitar2';
import Guitar3 from './components/guitar3';
import Guitar4 from './components/guitar4';
import Guitar5 from './components/guitar5';
import Guitar6 from './components/guitar6';

import './App.css';


function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/myguitars" element={<Myguitars />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/servicerequest" element={<ServiceRequest />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/guitar1" element={<Guitar1 />} />
                    <Route path="/guitar2" element={<Guitar2 />} />
                    <Route path="/guitar3" element={<Guitar3 />} />
                    <Route path="/guitar4" element={<Guitar4 />} />
                    <Route path="/guitar5" element={<Guitar5 />} />
                    <Route path="/guitar6" element={<Guitar6 />} />

                </Routes>

            </main>
            <Footer />
        </Router>
    );
}

export default App;
