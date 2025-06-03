import React from 'react';
import HeroLeather from '../../components/leather/HeroLeather';
import NavbarLeather from '../../components/layout/NavbarLeather';
import LeatherFuture from '../../components/leather/LeatherFuture';
import LeatherStats from '../../components/leather/LeatherStats';
import Divider from '../../components/ui/Divider';
import LeatherProductsBento from '../../components/leather/LeatherProductsBento';   
import LeatherContact from '../../components/leather/LeatherContact';
import FooterLeather from '../../components/layout/FooterLeather';
import Certifications from "../../components/stoever/Certifications";

const LeatherPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <NavbarLeather />
        <div>
          <HeroLeather />
        </div>
        <div>
          <Divider />
          <LeatherFuture />
          <Divider />
        </div>
        <div>
          <LeatherStats />
        </div>
        <div>
          <Divider />
          <LeatherProductsBento />
        </div>
        <div>
          <Certifications/>
        </div>
        <div>
          <LeatherContact />
        </div>
      </main>
      <FooterLeather />
    </div>
  );
};

export default LeatherPage;
