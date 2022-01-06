import React, { useEffect } from "react";

import HomeSection from '../../sections/HomeSection';

import Header from '../../Components/Header'

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log(' ');
    console.log(' ');
    console.log('Made by ');
    console.log(' ');
    console.log(' ');
  }, []);

  return (
    <>  
  
      <HomeSection />
    </>
  )
}

export default Dashboard;
