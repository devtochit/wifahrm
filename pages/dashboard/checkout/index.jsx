import Head from "next/head";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React, { useEffect, useState ,Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/Dashboard/components/Button";
import { selectBasketItems, selectBasketTotal, plusItem, minusItem, AddCropToFarmLand } from "../../../redux/slice/Crop/cropSlice";
import CheckoutProduct from "../../../components/Dashboard/components/BasketProduct";
import Layout from "../../../components/Dashboard/Layout";
import { usePaystackPayment } from "react-paystack";
import { currencyFormatter } from "../../../utils";
import Image from "next/image";
import Dashboard from "../../../components/Dashboard/shared/components/Dashboard";
import { getCropsPlanted, getfarmbycustomerid } from "../../../redux/slice/marketplace/marketplaceSlice";
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";


const withAuth = (Component) => {
	const Auth = (props) => {
		const { isLoggedIn, userData } = useSelector((state) => state.authReducers.Authentication);



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

function Checkout() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const {userData} = useSelector((state) => state.authReducers.Authentication);
  const { customerdata } = useSelector((state) => state.marketReducers.getMarketSlice);
  const publicKey = 'pk_test_640d50dd050ee5699907f210fd4fc6463f021d89';
  const dispatch = useDispatch()

  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});
  const [loading, setLoading] = useState(false);
  const keys = Object.keys(groupedItemsInBasket);
  const values = Object.values(groupedItemsInBasket);

  if (keys.length > 0 && values.length > 0) {
    const cropstoAdd = values.map((item) => {

      const cropId = item[0].cropId;
      const quantityPlanted = item[0].quantityPlanted;
      // console.log('inside the basket ', item);

      // return { cropId, quantityPlanted }

    });
  }
  const getPlantedCrops = (farmId) => {
    return dispatch(getCropsPlanted(farmId));
  };

  // const getCropsPlantedMemoized = useCallback(
  //   () => {
  //     const farmId = customerdata.farmId;
  //     dispatch(getCropsPlanted(farmId));
  //   },
  //   [dispatch, customerdata.farmId]
  // );

  // useEffect(() => {
  //   getCropsPlantedMemoized();
  // }, [getCropsPlantedMemoized]);


  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

    const config = {
      // reference: (new Date()).getTime().toString(),
      email: 'uzomaesse@gmail.com',
      amount: basketTotal * 100,
      publicKey: publicKey,
      embedOptions: {
        width: 1000,
        height: 1000
      },
      metadata: {
        cardItem: groupedItemsInBasket,
        userId: 1
      }
    };

  useEffect(() => {
    console.log('useEffect called');
    dispatch(getfarmbycustomerid())
}, [dispatch]);



  const initializePayment = usePaystackPayment(config);
const onSuccess = (reference) => {
  if (keys.length > 0 && values.length > 0) {
    const cropsToAdd = values.map((item) => {
      const cropId = item[0].id;
      const quantityPlanted = item[0].quantityPlanted;
      const cropName = item[0].cropName
      return {cropName, marketCropId: cropId, quantityPlanted };
    });

    const farmId = customerdata.farmId;
    const reqId = "";

    const payload = {
      cropsList: cropsToAdd,
      farmId,
      reqId
    };
    // console.log(payload)
    dispatch(AddCropToFarmLand(payload));
  }
};




const onClose = () => {
  alert('Payment cancelled');
};

// Define the function to handle form submissions
const handleSubmit = (e) => {
  e.preventDefault();
  // Initiate the payment process
  initializePayment(onSuccess, onClose);
};



  return (
    <Dashboard>

<Head>
  <title>wifarhm |checkout </title>
</Head>
<div
 suppressHydrationWarning
className="w-full min-h-screen relative bg-cusgray  pt-20 pb-10">

  <div className="max-w-6xl mx-auto  px-5">
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-x-4">
      <div className="md:col-span-2 md:mr-5">
        <div className="">
          <div className="shadow-lg rounded-xl bg-cusblack text-white px-5 py-3">
            <h1 className="font-semibold text-lg md:text-xl mb-1">
            plant any crop from the confort of your phone
            </h1>
            <p className="text-xs mb-1 text-gray-100">
              Non member receive free-shipping for purchases NGN 1,500,000
              or more
            </p>
          </div>
          <div className="rounded-xl bg-white px-5 pt-5 mt-5 shadow-lg overflow-hidden">
            <p>Your Basket ({items.length})</p>
            <div className="pt-5 pb-2">


          {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                   <React.Fragment key={key}>
              <CheckoutProduct key={key} items={items} id={key} />
              </React.Fragment>
            ))}
          </div>
        )}


              {items.length === 0 && (
                <div className="text-gray-400 text-sm mb-10 flex  flex-col items-center  gap-10">
                  {/* <Image
                    className="md:w-1/3 object-cover w-full"
                    src="https://i.ibb.co/hWZhd6F/empty-cart-4a7779da-Convert-Image.png"
                    alt=""
                  /> */}
                  <p className="text-center  ">
                    Your basket is empty,
                    <br />
                  </p>
                  <Button  title="Continue Shopping" onClick={() => router.push("/dashboard")} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-0 col-span-1">
        <div className="rounded-xl bg-white shadow-lg py-6 px-5">
          <h1 className="text-cusblack font-bold text-md">SUMMARY</h1>
          <div className="px-4 py-3 text-xs font-medium flex place-items-center text-gray-400 border border-gray-200 rounded-md my-4">
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
              />
            </svg>
            DO YOU HAVE PROMO CODE?
          </div>

          <div className="text-lg pt-1 font-bold pb-2 border-b border-cusblack flex justify-between place-items-center">
            <p className="">SUBTOTAL</p>

            {currencyFormatter(basketTotal)}

          </div>

          <div className="my-3 border-b border-cusblack pb-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between font-semibold text-lg  place-items-center text-sm mb-1"
              >
                <p className=" font-semibold text-lg pr-3">{item.cropName}</p>

                            {currencyFormatter(item.cropPrice * item.quantity)}

              </div>
            ))}
            <div className="flex justify-between place-items-center text-sm mb-1">
              <p>TAX</p>
              <p>FREE</p>
            </div>
          </div>

          <div className="flex text-lg font-bold justify-between place-items-center font-semibold">
            <p>TOTAL</p>
            {currencyFormatter(basketTotal)}
          </div>

          {/* <button
            disabled={!items.length}
            // onClick={createCheckoutSession}
            className="py-2 px-3 disabled:cursor-not-allowed text-white w-full mt-6 rounded-lg bg-cusblack "
          >
            {!loading ? (
              <span className="flex justify-center place-items-center">
                CHECKOUT
                <svg
                  className="ml-2 w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            ) : (
              <img
                className="w-6 h-6 mx-auto"
                src="https://i.ibb.co/pL1TJSg/Rolling-1s-200px-2.gif"
                alt=""
              />
            )}
          </button> */}

                    <Button
                    noIcon
                    // loading={loading}
                    title="Checkout"
                    width="w-full"
                   onClick={handleSubmit}
                  />
        </div>
      </div>

  </div>
</div>
</div>
    </Dashboard>
  );
}

export default Checkout
