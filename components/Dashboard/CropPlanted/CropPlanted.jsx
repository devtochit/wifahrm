import { useCallback, useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/Dashboard/shared/components/ui/loading/LoadingSpinner";
import dynamic from "next/dynamic";
import { getCropsPlanted, getfarmbycustomerid } from "../../../redux/slice/marketplace/marketplaceSlice";
  import PlantedList from "./components/CropPlatedList";

// const ProductList = dynamic(
//   () => import("./components/CropPlatedList"),
//   { loading: () => <LoadingSpinner className="mt-20" /> }
// );

const CropPlanted = () => {
  const dispatch = useDispatch()
  const { customerdata ,plantedCrops} = useSelector((state) => state.marketReducers.getMarketSlice);
  // console.log('inside dashboard home ', plantedCrops)

  console.log(customerdata)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    dispatch(getfarmbycustomerid())
}, [dispatch]);

const getCropsPlantedMemoized = useCallback(() => {
  const farmId = customerdata.farmId;
  // console.log('get planted crops', farmId);

  dispatch(getCropsPlanted(farmId));
}, [customerdata.farmId, dispatch]);

useEffect(() => {
  if (customerdata.farmId) {
    getCropsPlantedMemoized();
  }
}, [customerdata.farmId, getCropsPlantedMemoized]);


  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
}, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">cropPlanted</h1>
      <div className="pt-6 w-full">
        {loading ? (
          <LoadingSpinner className="mt-20" />
        ) : (
          <>
              <PlantedList  plantedcrop={plantedCrops} />

          </>
        )}

      </div>
    </div>
  );
};

export default CropPlanted;

// export async function getServerSideProps() {
//   // Fetch data from the Redux store here
//   const MarketData = [];

//   return {
//     props: {
//       MarketData,
//     },
//   };
// }
