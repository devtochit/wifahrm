import Layout from '../../../components/Dashboard/Layout';
import ProductCard from '../../../components/Dashboard/FarmCard/ProductCard';
import Select from 'react-select';
import Link from 'next/link';
import { getMarketData } from '../../../redux/slice/marketplace/marketplaceSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToBasket } from '../../../redux/slice/Crop/cropSlice';
import { useRouter } from 'next/router';

const withAuth = (Component) => {
  const Auth = (props) => {
    const { isLoggedIn } = useSelector((state) => state.authReducers.Authentication);
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace('/login');
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      return null; // or return a loading indicator
    }

    return <Component {...props} />;
  };

  return Auth;
};

const Product = () => {
  const { data, loading } = useSelector((state) => state.marketReducers.getMarketSlice.MarketData);
  console.log(data)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('useEffect called');
    dispatch(getMarketData());
  }, [dispatch]);

  const handleSubmit = (values) => {
    dispatch(addToBasket(values));
    toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
  };

  return (
    <Layout>

      <div className="navbar  pt-20 flex flex-row justify-end px-12">
        <div className="dropdown dropdown-start w-80 ">
          <Select
            placeholder="All product Avalable"
            isMulti
          />
        </div>

      </div>
      <h1 className="text-xl font-bold pb-4">Products</h1>
      <div className="w-full min-h-main p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="w-full h-full flex flex-row items-center justify-center lg:px-32  py-4 gap-5 flex-wrap">

            {data && data.map((product,index) => (
                <Link key={index} href={`/dashboard/products/${product.id}`}>
              <ProductCard
                key={product.id}
                imageUrl = {product.imageUrl}
                description = {product.description}
                cropCategory={product.cropCategory}
                cropName={product.cropName}
                cropPrice={product.cropPrice}
                datePlanted={product.datePlanted}
                handleSubmit={(event) => handleSubmit(event, product)}
              />
              </Link>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Product);
