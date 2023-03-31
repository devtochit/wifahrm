import React from "react";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import Stats from "../components/HomePage/Stats";
import Footer from "../components/HomePage/Footer";
import Offer from "../components/HomePage/Offer";

const services = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Offer />
      <Stats />
      <Footer />
    </div>
  );
};

export default services;
