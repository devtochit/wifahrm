import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingSpinner from "../../../components/Dashboard/shared/components/ui/loading/LoadingSpinner";
import dynamic from "next/dynamic";

import { plantedcropsList } from '../../../utils/data';



const ProductList = dynamic(
  () => import("./components/CropPlatedList"),
  { loading: () => <LoadingSpinner className="mt-20" /> }
);
const CropPlanted = () => {

  const [loading, setLoading] = useState(true);

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
            {plantedcropsList.map((item) => (
              <ProductList key={item.cropName} plantedcrop={item} />
            ))}
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
