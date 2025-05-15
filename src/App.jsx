import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/utils/ScrollToTop';

import StoeverHomePage from './pages/stoever/index';
import AboutStoeverPage from './pages/stoever/about';
import ContactPage from './pages/contact/index';
import LeatherPage from './pages/leather/index';
import AboutLeatherPage from './pages/leather/about';
import LeatherProductsPage from './pages/leather/products';
import LeatherContactPage from './pages/leather/contact';
import ConstructionPage from './pages/construction/index';
import AboutConstructionPage from './pages/construction/about';
import ConstructionProductsPage from './pages/construction/productsandservices';
import ConstructionContactPage from './pages/construction/contact';

import FloatingNavButton from './components/layout/FloatingBizSwitch';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Stoever */}
        <Route path="/" element={<StoeverHomePage />} />
        
        <Route path="/about" element={<AboutStoeverPage />} />
      
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Leather */}
        <Route path="/leather" element={<LeatherPage />} />
        
        <Route path="/leather/about" element={<AboutLeatherPage />} />

        <Route path="/leather/products" element={<LeatherProductsPage />} />

        <Route path="/leather/contact" element={<LeatherContactPage />} />
        
        {/* Construction */}
        <Route path="/construction" element={<ConstructionPage />} />

        <Route path="/construction/about" element={<AboutConstructionPage />} />

        <Route path="/construction/productsandservices" element={<ConstructionProductsPage />} />

        <Route path="/construction/contact" element={<ConstructionContactPage />} />

        {/* Optional: 404 Not Found Route */}
        {/* <Route path="*" element={<div>Page Not Found</div>} /> */}
      </Routes>
      
      {/* Global Floating Button */}
      <FloatingNavButton />
      
      {/* <Footer /> could go here if you want it on EVERY page */}
    </BrowserRouter>
  );
}

export default App;
