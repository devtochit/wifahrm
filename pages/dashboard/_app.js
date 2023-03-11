import { useRouter } from "next/router";
import Layout from '../../components/Dashboard/Layout'
import { Toaster } from "react-hot-toast";


const App = ({ Component, pageProps }) => {

 

  return (

 
  <> 
  <Layout>
  <Toaster />
    <Component {...pageProps} />;
    </Layout>
  </>
   )
};

export default App;
