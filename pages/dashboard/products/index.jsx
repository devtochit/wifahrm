import Image from 'next/image';
import Layout from '../../../components/Dashboard/Layout';
import ProductCard from '../../../components/FarmCard/FarmCard';
import Select from 'react-select';
import Link from 'next/link';
import { getMarketData } from '../../../redux/slice/marketplace/marketplaceSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToBasket } from '../../../redux/slice/Crop/cropSlice';
import Basket from '../../../components/Dashboard/components/bracket';
import { CropData } from '../../../utils/data';
import { data } from 'autoprefixer';
CropData
const Product = () => {
  const { MarketData, loading } = useSelector((state) => state.marketReducers.getMarketSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMarketData());
  }, [dispatch]);

  const handleSubmit = (event, values) => {
    dispatch(addToBasket(values));
    toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
  };

  return (
    <Layout>
      <Basket />
      <div className="navbar  flex flex-row justify-end px-12">
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
        {/* <Link key={index} href={`/dashboard/products/${product.id}`}></Link> */ }
            {MarketData?.data.map((product) => (
              <ProductCard
                key={product.id}
                cropCategory={product.cropCategory}
                cropName={product.cropName}
                cropPrice={product.cropPrice}
                datePlanted={product.datePlanted}
                handleSubmit={(event) => handleSubmit(event, product)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;
