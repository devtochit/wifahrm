import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.Authentication.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login'); // Redirect to login page if not logged in
    }
  }, [isLoggedIn, router]);

  return (
    <>
      {isLoggedIn && children} {/* Render children only if logged in */}
    </>
  );
};

export default PrivateRoute;

export async function getServerSideProps(context) {
  // Implement your authentication logic here.
  // If user is not authenticated, redirect to login page.
  const isLoggedIn = true; // Replace with actual authentication logic
  
  if (!isLoggedIn) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Pass necessary props to the component here if required.
  };
}
