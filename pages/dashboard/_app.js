import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import Layout from '../../components/AdminLayout/index'


const App = ({ Component, pageProps }) => {
  const router = useRouter();

  const cookies = parseCookies();
  const token = cookies.token;
  if (!token) {
    router.push("/Login");
  }

  return (

 
  <> 
    <Component {...pageProps} />;
  </>
   )
};

export default App;
