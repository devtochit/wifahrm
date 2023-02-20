import { useRouter } from "next/router";
import Layout from '../../components/Dashboard/Layout'


const App = ({ Component, pageProps }) => {

 

  return (

 
  <> 
  <Layout>
    <Component {...pageProps} />;
    </Layout>
  </>
   )
};

export default App;
