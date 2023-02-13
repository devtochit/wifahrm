import "../styles/globals.css";
import Head from "next/head";
import { motion } from "framer-motion";
import Preloader from "../components/Preloader";
import { useEffect, useState } from "react";
import { Provider, useStore } from "react-redux";
import { store } from "../redux/store";




function MyApp({ Component, pageProps, router }) {
  // set a timeout for the preloader to show
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 6000);
  }, []);

  // const fstore = useStore(store);

  return (

    <>
      <Head>
        <title>WiFahrm</title>
        <meta name="description" content="A landing page for farm products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        // show the preloader if it's true
        showPreloader ? (
          <Preloader />
        ) : (
          <motion.div
            key={router.route}
            initial={{ opacity: 0.4, transform: "scale(0.9)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
          >

              <Provider store={store}>
            <Component {...pageProps} />
              </Provider>

          </motion.div>
        )
      }
    </>
  );
}

export default MyApp;
