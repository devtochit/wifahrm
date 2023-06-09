import styles from "../styles/Home.module.css";
import Navbar from "../components/HomePage/Navbar"
import Banner from "../components/HomePage/Banner";
import InfoCard from "../components/HomePage/InfoCard";
import Services from "../components/HomePage/Services";
import Gallery from "../components/HomePage/Gallery";
import Contact from "../components/HomePage/Contact";
import Footer from "../components/HomePage/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Navbar />
        <Banner />
        <div style={{ }}>
          <InfoCard />
        </div>
 
   <Services />   
       <Gallery />
           <div> 
             <Contact />
             </div>
        <Footer />  
      </main>
    </div>
  );
}
