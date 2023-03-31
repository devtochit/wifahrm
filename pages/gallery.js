import React from "react";
import Navbar from "../components/HomePage/Navbar";
// import Banner from "../components/HomePage/Banner";
import Footer from "../components/HomePage/Footer";
import styles from "../styles/Gallery-page.module.css";
import GalleryBanner from "../components/HomePage/GalleryBanner";
import Collections from "../components/HomePage/Collections";

const gallery = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <GalleryBanner />
      <Collections />
      <Footer />
    </div>
  );
};

export default gallery;
