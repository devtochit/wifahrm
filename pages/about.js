import React from "react";
import styles from "../styles/About-page.module.css";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import Footer from "../components/HomePage/Footer";
import AboutLite from "../components/HomePage/AboutLite";
import Mission from "../components/HomePage/Mission";
import Stats from "../components/HomePage/Stats";

const about = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Navbar />
        <Banner />
        <div className={styles.about__inner}>
          <div style={{ position: 'relative' }}>
          <AboutLite />

          </div>
          <Mission />
          <Stats />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default about;
