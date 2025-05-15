import React from 'react';
import LeatherContact from '../../components/leather/LeatherContact';
import FooterLeather from '../../components/layout/FooterLeather';
import NavbarLeather from '../../components/layout/NavbarLeather';
import LeatherFAQ from '../../components/ui/LeatherFAQ';

const LeatherContactPage = () => {
  return (
    <div>
      <NavbarLeather />
      <LeatherContact />
      <LeatherFAQ/>
      <FooterLeather />
    </div>
  );
};

export default LeatherContactPage;
