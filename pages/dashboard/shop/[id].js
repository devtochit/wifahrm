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

const CropDetails = () => {

  const router = useRouter()
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.marketReducers.getMarketSlice.MarketData);
  const { id } = router.query;

  const cropData = data?.find((crop) => crop.id === parseInt(id));
  useEffect(() => {
    console.log('useEffect called');
    dispatch(getMarketData());
  }, [dispatch]);

  const handleSubmit = (values) => {
    console.log("added basket", values)
    dispatch(addToBasket(values));
    toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
  };
  if (!cropData) {
    return <div>Loading...</div>;
  }


  return (
    <Dashboard>
      <Basket />
      <>
        <div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
          <MarketplaceDetails
            key={cropData.id}
            cropCategory={cropData.cropCategory}
            imageUrl={cropData.imageUrl}
            cropEstimatedDuration={cropData.cropEstimatedDuration}
            cropName={cropData.cropName}
            description={cropData.description}
            cropPrice={cropData.cropPrice}
            dailyInterestRate={cropData.dailyInterestRate}
            datePlanted={cropData.datePlanted}
            lifeCycleYieldRate={cropData.lifeCycleYieldRate}
            monthlyInterestRate={cropData.monthlyInterestRate}
            cropData={cropData}
            handleSubmit={handleSubmit}
          />
        </div>
      </>
    </Dashboard>
  )
}

export default CropDetails;
