import React from "react";
import  Hero from '@/components/Hero'
import  Features from '@/components/Features'
import  HowItWorks from '@/components/HowItWorks'
import  AboutUs from '@/components/AboutUs'
import  ContactUs from '@/components/ContactUs'
import  Outro from '@/components/Outro'
import  Footer from '@/components/Footer'
const HomePage = () => {
  return (
    <div className="w-full h-auto overflow-y-auto overflow-x-hidden ">
      <Hero />
      <Features />
      <HowItWorks />
      <AboutUs />
      <ContactUs />
      <Outro />
      <Footer />
    </div>
  );
};

export default HomePage;
