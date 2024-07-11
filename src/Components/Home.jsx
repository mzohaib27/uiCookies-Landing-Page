import React from "react";
import HeroSection from "./HeroSection";
import Feature from "./Feature";
import CardSection from "./CardSection";
import Pricing from "./Pricing";
import Testimonial from "./Testimonial";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CardSection />
      <Feature />
      <Pricing />
      <Testimonial />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
