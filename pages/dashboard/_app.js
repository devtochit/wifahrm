import { useRouter } from "next/router";
import Layout from '../../components/AdminLayout/index'


const App = ({ Component, pageProps }) => {

 

  return (

 
  <> 
    <Component {...pageProps} />;
  </>
   )
};

export default App;
