import React from "react";
import DonateForm from "../components/HomePage/SignForm";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/HomePage/Navbar";

const donate = () => {
  return (
    <div>
      <Navbar />
      {/* <DonateBanner /> */}
      <DonateForm />
      <Footer />
    </div>
  );
};

export default donate;
