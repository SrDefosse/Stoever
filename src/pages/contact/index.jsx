import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactUs from '../../components/ContactUs';
import FAQ from '../../components/FAQ';
import Divider from '../../components/Divider';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-white">
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