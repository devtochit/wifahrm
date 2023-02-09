import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar"
import Banner from "../components/Banner";
import InfoCard from "../components/InfoCard";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <Banner />
        <div style={{ position: 'relative' }}>
          <InfoCard />
        </div>
        {/* <About /> */}
        <Services />
        <Gallery />
           <div style={{padding:10}}> 
             <Contact />
             </div>
        <Footer /> 
      </main>
    </div>
  );
}
