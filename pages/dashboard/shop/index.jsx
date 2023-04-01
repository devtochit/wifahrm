import React, { useEffect, useState } from "react";
import CardSkeleton from "../../../components/Dashboard/components/LoadingCard";
import Layout from "../../../components/Dashboard/components/shopLayout";
import ProductCard from "../../../components/Dashboard/FarmCard/productCard2";
import Head from "next/head";
import Link from 'next/link';
import { getMarketData } from '../../../redux/slice/marketplace/marketplaceSlice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { addToBasket } from '../../../redux/slice/Crop/cropSlice';
import Dashboard from "../../../components/Dashboard/shared/components/Dashboard";

function Category() {
    const [sort, setSort] = useState(0);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.marketReducers.getMarketSlice.MarketData);
    const { category } = useSelector((state) => state.marketReducers.getMarketSlice);



    useEffect(() => {
        console.log('useEffect called');
        dispatch(getMarketData());
    }, [dispatch]);

    const handleSubmit = (values) => {
        dispatch(addToBasket(values));
        toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
    };

    //   const recent_category = category
    //   const data_items = data
    //     .filter((item) => {
    //         console.log('is it' ,item )

    //       if (recent_category.length > 0) {
    //         console.log(recent_category.length > 0)
    //       console.log(item.cropCategory == recent_category.cropCategory )   
    //       } else {
    //         return true;
    //         console.log('is it' ,true )
    //       }
    //     })
    //     .sort((a, b) => {
    //       if (sort === 1) {
    //         return a.cropPrice - b.cropPrice;
    //       }
    //       if (sort === 2) {
    //         return b.cropPrice - a.cropPrice;
    //       }
    //       return true;
    //     });


    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);


 


    return (
        <>
        <Dashboard> 
            <Head>
                <title>Wifarm | Shop</title>
            </Head>
            <Layout categories={data} setSort={setSort} >
                {!loading ? (
                    data?.length < 1 ? (
                        <p className="col-span-full mx-auto text-sm text-gray-400">
                            No item found
                        </p>
                    ) : (
                        
                     
                        data && data.map((product,index) => (
                            <Link key={index} href={`/dashboard/shop/${product.id}`}>
                          <ProductCard
                            key={product.id}
                            imageUrl = {product.imageUrl}
                            description = {product.description}
                            cropCategory={product.cropCategory}
                            cropName={product.cropName}
                            cropPrice={product.cropPrice}
                            datePlanted={product.datePlanted}
                            product={product}
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
            </Dashboard>
        </>
    );
}

export default Category;
