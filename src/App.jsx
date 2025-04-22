import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Category from './components/Category';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import VedioGallery from './components/VedioGallery';
import LocationPage from './components/LocationPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
    return (
        <div>
           <Header/>           
       
      <Navbar />
    <Home/>
    <Category/>
    <Products/>
    <AboutUs/>
    <Gallery/>
    <VedioGallery/>
    <LocationPage/>
    <ContactPage/>
    <Footer/>
    </div>
        
    );
}

export default App;
