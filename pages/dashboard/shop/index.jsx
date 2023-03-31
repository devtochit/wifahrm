import React, { useEffect, useState } from "react";
import CardSkeleton from "../../../components/Dashboard/components/LoadingCard";
import Layout from "../../../components/Dashboard/components/shopLayout";
import ProductCard from "../../../components/Dashboard/FarmCard/productCard2";
import Head from "next/head";
import Layout from '../../../components/Dashboard/Layout';
import Link from 'next/link';
import { getMarketData } from '../../../redux/slice/marketplace/marketplaceSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToBasket } from '../../../redux/slice/Crop/cropSlice';






function Category({ data, dataItems, dataTypes }) {
    const [sort, setSort] = useState(0);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.marketReducers.getMarketSlice.MarketData);
    console.log(data)

    useEffect(() => {
        console.log('useEffect called');
        dispatch(getMarketData());
    }, [dispatch]);

    const handleSubmit = (values) => {
        dispatch(addToBasket(values));
        toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
    };

    //   const recent_category = useSelector(recentCategory);
    //   const data_items = dataItems
    //     .filter((item) => {
    //       if (recent_category.length > 0) {
    //         return item.type.name == recent_category;
    //       } else {
    //         return true;
    //       }
    //     })
    //     .sort((a, b) => {
    //       if (sort === 1) {
    //         return a.price - b.price;
    //       }
    //       if (sort === 2) {
    //         return b.price - a.price;
    //       }
    //       return true;
    //     });


    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);


 


    return (
        <>
            <Head>
                <title>wefootwear | Shop</title>
            </Head>
            <Layout categories={data} setSort={setSort} >
                {!loading ? (
                    data?.length < 1 ? (
                        <p className="col-span-full mx-auto text-sm text-gray-400">
                            No item found
                        </p>
                    ) : (
                        
                     
                        data && data.map((product,index) => (
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
                        ))


                    )
                ) : (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                )}
            </Layout>
        </>
    );
}

export default Category;
