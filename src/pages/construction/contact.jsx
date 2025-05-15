import React from 'react';
import ConstructionContact from '../../components/construction/ConstructionContact';
import NavbarConstruction from '../../components/layout/NavbarConstruction';
import FooterConstruction from '../../components/layout/FooterConstruction';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
    <NavbarConstruction />
    <ConstructionContact />
    <FooterConstruction />
    </div>
  );
};

export default ContactPage;

