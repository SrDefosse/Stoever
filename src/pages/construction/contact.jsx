import React from 'react';
import ConstructionContact from '@/components/construction/ConstructionContact';
import NavbarConstruction from '@/components/layout/NavbarConstruction';
import FooterConstruction from '@/components/layout/FooterConstruction';
import { font } from '@/fonts';
const ContactPage = () => {
  return (
    <div className={`min-h-screen bg-white ${font.className}`}>
    <NavbarConstruction />
    <ConstructionContact />
    <FooterConstruction />
    </div>
  );
};

export default ContactPage;

