import Head from "next/head";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/Dashboard/components/Button";
import { selectBasketItems, selectBasketTotal } from "../../../redux/slice/Crop/cropSlice";
import CheckoutProduct from "../../../components/Dashboard/components/CheckoutProduct";
import Layout from "../../../components/Dashboard/Layout";
import { usePaystackPayment } from "react-paystack";
import { currencyFormatter } from "../../../utils";


function Checkout() {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const {userData} = useSelector((state) => state.authReducers.Authentication);
  const publicKey = 'pk_test_640d50dd050ee5699907f210fd4fc6463f021d89';


  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({});
  const [loading, setLoading] = useState(false);

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

const initializePayment = usePaystackPayment(config);

const onSuccess = (reference) => {
  router.push("/dashboard/success");

  // Use the Paystack API to retrieve the metadata associated with the payment
  // fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
  //   headers: {
  //     Authorization: `Bearer ${'sk_test_6fc36fbe4814c6ffd3f12a8816be2337e8decb9a'}`
  //   }
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     const metadata = data.data.metadata;
  //     const cardItem = metadata.cardItem;
  //     const userId = metadata.userId;
  //     // Do something with the card item and user ID
  //     alert(`Payment successful with reference: ${reference}. Card item: ${cardItem}. User ID: ${userId}`);

  //   })
  //   .catch(error => {
  //     console.log(error);
  //     alert('An error occurred while verifying payment');
  //   });
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
    <Layout> 
    <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
      <Head>
        <title>cultivate crops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <main className="mx-auto max-w-5xl pb-24">
        <div className="px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-5xl">
            {items.length > 0 ? "Review your bag." : "You have not added any crop to plant ."}
          </h1>
          <p className="my-4 text-lg">Free delivery and free returns.</p>

          {items.length === 0 && (
            <Button
              title="Continue Shopping"
              onClick={() => router.push("/dashboard")}
            />
          )}
        </div>

        {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}

            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>
                  {currencyFormatter(basketTotal)}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>FREE</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-x-1 lg:flex-row">
                      Estimated tax for:{" "}
                      <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Enter zip code
                        <ChevronDownIcon className="h-6 w-6" />
                      </p>
                    </div>
                    <p>$ -</p>
                  </div>
                </div>

                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Total</h4>
                  <h4>
                  {currencyFormatter(basketTotal)}
                  </h4>
                </div>
              </div>

              <div className="my-14 space-y-4">
                <h4 className="text-xl font-semibold">
                  How would you like to check out?
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">
                  <div className="order-2 flex flex-1 flex-col items-center rounded-xl bg-gray-200 p-8 py-12 text-center">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      <span>safe payment</span>
                      <span> use any card of your choice</span>
                      {/* <span>
                        $283.16/mo. at 0% APR<sup className="-top-1">◊</sup>
                      </span> */}
                    </h4>
                    <Button title="Check Out with Apple Card Monthly Installments" />
                    <p className="mt-2 max-w-[240px] text-[13px]">
                      $0.00 due today, which includes applicable full-price
                      items, down payments, shipping, and taxes.
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Pay in full
                      <span>
                    {currencyFormatter(basketTotal)}
                      </span>
                    </h4>

                    <Button
                      noIcon
                      loading={loading}
                      title="Check Out"
                      width="w-full"
                      onClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
    </Layout>
  );
}

export default Checkout;
