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
import { useRouter } from "next/router";

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

function Shop() {
    const [sort, setSort] = useState(0);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { MarketData } = useSelector((state) => state.marketReducers.getMarketSlice);
    const data = MarketData || [];
    const category = MarketData.category || "";

    useEffect(() => {
        console.log('useEffect called');
        dispatch(getMarketData());
    }, [dispatch]);

    const handleSubmit = (values) => {
        dispatch(addToBasket(values));
        toast.success(`${values.cropName} added to basket`, { position: 'top-center' });
    };

    const categories = data ? Array.from(new Set(data.map((product) => product.cropCategory))) : [];

    const filteredData = data ? data.filter((product) => category === "" || product.cropCategory === category) : [];

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const productCards = data?.map((product) => (
        <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            description={product.description}
            cropCategory={product.cropCategory}
            cropName={product.cropName}
            cropPrice={product.cropPrice}
            datePlanted={product.datePlanted}
            product={product}
            handleSubmit={(event) => handleSubmit(event, product)}
        />
    ));

    return (
        <>
            <Dashboard>
                <Head>
                    <title>Wifarm | Shop</title>
                </Head>
                <Layout categories={categories} setSort={setSort}>
                    {!loading ? (
                        filteredData.length > 0 ? (
                            filteredData.map((product, index) => {

                                return (
                                    <ProductCard
                                        key={index}
                                        id={product.id}
                                        imageUrl={product.imageUrl}
                                        description={product.description}
                                        cropCategory={product.cropCategory}
                                        cropName={product.cropName}
                                        cropPrice={product.cropPrice}
                                        datePlanted={product.datePlanted}
                                        product={product}
                                        handleSubmit={(event) => handleSubmit(event, product)}
                                    />
                                );

                            })
                        ) : (
                            productCards
                        )
                    ) : (
                        <>
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                            <CardSkeleton />
                        </>
                    )}

                </Layout>

            </Dashboard >
        </>
    );
}

export default Shop;
