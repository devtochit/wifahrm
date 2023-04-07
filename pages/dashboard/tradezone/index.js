import { useDispatch, useSelector } from 'react-redux';
import { getMarketData } from '../../../redux/slice/marketplace/marketplaceSlice';
import Layout from '../../../components/Dashboard/Layout';
import MarketplaceDetails from '../../../components/Dashboard/MarketPlace/MarketDetails';
import { useRouter } from 'next/router';
import Basket from '../../../components/Dashboard/components/bracket';
import { addToBasket } from '../../../redux/slice/Crop/cropSlice';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import Dashboard from "../../../components/Dashboard/shared/components/Dashboard";
import TradeZoneDetails from '../../../components/Dashboard/tradezone/TradeZoneDetails';
import { plantedcropsList } from '../../../utils/data';


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

const TradeZone = () => {



  const router = useRouter()
  const dispatch = useDispatch();
  const { category, } = useSelector((state) => state.marketReducers.getMarketSlice);


  //   const { id } = router.query;

  // useEffect(() => {
  //   console.log('useEffect called');
  //   dispatch(getMarketData());
  // }, [dispatch]);

  // const handleSubmit = (values) => {
  //   console.log("added basket",values)
  //   dispatch(addToBasket(values));
  //   toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
  // };
  // if (!cropData) {
  //   return <div>Loading...</div>;
  // }


  return (
    <Dashboard>
      <Basket />
      <>
        <div
          suppressHydrationWarning
          className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
          <h1> TradeZone </h1>
          {
            plantedcropsList.map((item) => (
              <TradeZoneDetails
                key={item.cropName}
                marketCropid={item.marketCropId}
                quantityPlanted={item.quantityPlanted}
                cropName={item.cropName}
                cropCategory={item.cropCategory}
                imageUrl={item.imageUrl}
              />
            ))
          }
        </div>
      </>
    </Dashboard>
  )
}

export default TradeZone;
