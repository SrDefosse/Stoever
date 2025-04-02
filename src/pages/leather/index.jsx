import React from 'react';
import HeroLeather from '../../components/HeroLeather';
import NavbarLeather from '../../components/NavbarLeather';
import LeatherMarquee from '../../components/LeatherMarquee';
import LeatherFuture from '../../components/LeatherFuture';
import LeatherStats from '../../components/LeatherStats';
import Divider from '../../components/Divider';
import LeatherProductsBento from '../../components/LeatherProductsBento';   
import LeatherContact from '../../components/LeatherContact';

const LeatherPage = () => {
  return (
    <main className="relative">
      <NavbarLeather />
      <div>
      <HeroLeather />
      </div>
      <div>
        <LeatherMarquee />
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
        <LeatherContact />
      </div>
    </main>
  );
};

export default LeatherPage;
