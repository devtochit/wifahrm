import { useDispatch, useSelector } from 'react-redux';
import { getMarketData } from '../../../redux/slice/marketplace/marketplaceSlice';
import Layout from '../../../components/Dashboard/Layout';
import MarketplaceDetails from '../../../components/Dashboard/MarketPlace/MarketDetails';
import { useRouter } from 'next/router';
import Basket from '../../../components/Dashboard/components/bracket';
import { addToBasket } from '../../../redux/slice/Crop/cropSlice';
import toast from 'react-hot-toast';


export default function CropDetails() {


  const router = useRouter()
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.marketReducers.getMarketSlice.MarketData);
  const { id } = router.query;

  const cropData = data.find((crop) => crop.id === parseInt(id));
  console.log(cropData)

  const handleSubmit = (event, values) => {
    dispatch(addToBasket(values));
    toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
  };

  return (
    <Layout>
      <Basket />
      <>
        <div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
          <MarketplaceDetails
            cropCategory={cropData.cropCategory}
            cropEstimatedDuration={cropData.cropEstimatedDuration}
            cropName={cropData.cropName}
            cropPrice={cropData.cropPrice}
            // description={cropData.description}
            dailyInterestRate={cropData.dailyInterestRate}
            datePlanted={cropData.datePlanted}
            lifeCycleYieldRate={cropData.lifeCycleYieldRate}
            monthlyInterestRate={cropData.monthlyInterestRate}
            cropData={cropData}
            handleSubmit={handleSubmit}
          />
        </div>
      </>
    </Layout>
  )
}
