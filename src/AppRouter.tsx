import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderProvider from './components/headerFooterProvider/HeaderFooterProvider';
import HomeContent from './components/mainContent/homeContent/HomeContent';
import Services from './components/mainContent/services/Services';
import Contact from './components/mainContent/contact/Contact';
import { About } from './components/mainContent/about/About';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="" element={<HeaderProvider />}>
                <Route path="/" element={<HomeContent />} />
                <Route path="home" element={<HomeContent />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};

