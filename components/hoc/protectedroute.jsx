import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const protectedRoute = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.authReducers.Authentication);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
      if (isClient && !isLoggedIn) {
        router.replace('/login');
      }
    }, [isClient, isLoggedIn, router]);

    if (!isClient || !isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };

  return Auth;
};

export default protectedRoute
