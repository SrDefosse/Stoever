import React from 'react';
// import { font } from "@/fonts"; // Remove font import
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/stoever/ContactUs';
import FAQ from '../../components/ui/FAQ';
import Divider from '../../components/ui/Divider';

const ContactPage = () => {
    return (
        <div className={`min-h-screen bg-white`}>
            <Navbar />
            <div>
                <ContactUs/>
            </div>
            <Divider/>
            <div>
                <FAQ/>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage; 