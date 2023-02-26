import { farm } from '../../../utils/data'
import Layout from '../../../components/Dashboard/Layout'
import Image from 'next/image'
import Button from '../../../components/Button'
import FarmCrop from '../../../components/Farmcrop'
import React, { useState } from 'react';


export default function cropDetails({ farms }) {

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  return (
    <Layout>
    <>
    <div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' >

      <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8 pb-8 ">
        <div className="flex flex-col lg:flex-row bg-[#f7f7f7] rounded-lg overflow-hidden ">
          {/* Product Image */}
          <div className="bg-[#EFE9D9] flex items-center basis-1/2 p-2">
            <Image className="w-full" src={farms.imageSrc} alt={farms.name} />
          </div>

          {/* Product Details */}
          <div className="mt-6 pl-8 pr-8 pb-8 basis-1/2">
            <h1 className="text-[#1a1a1a] mb-2 font-fraunces font-normal text-4xl leading-none">
              {farms.name}
            </h1>
            {/* <p className="text-[#a7a597] mb-2 text-sm">{selectedColor.name}</p> */}
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
              {farms.location}
            </p>
            <hr className="h-px my-4 bg-[#ddd] border-0 dark:bg-[#ddd]"></hr>
              {
                farms.crops.map((crop,index)=>(
                  <div key={index}>
                  
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
             crop details
            </p>
            <hr className="h-px my-4 bg-[#ddd] border-0 dark:bg-[#ddd]"></hr>
          
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
              {crop.amountPlanted}
            </p>
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
              {crop.cropName}
            </p>
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
              {crop.cropEstimatedDuration}
            </p>
            <p className="text-[#1a1a1a] pb-6 text-sm leading-6">
              Slim, classic Italian made wallet made to go the distance.
              Features the ability to hold 3 cards in a compact, vegetable
              tanned case. Il  rich history of impeccably handcrafted
              leather goods culminates in an incredible assortment of functional
              wallets and cardholders.
            </p>
            <hr className="h-px my-4 bg-[#ddd] border-0 dark:bg-[#ddd]"></hr>
            <Button price={'ADD Crops'} onClick={handleModalToggle} />
              <span className="text-sm text-gray-600 mt-2">
                Free US Shipping $120+
              </span>
                  </div>
                ))
              }
          </div>

        </div>
      </div>
      {showModal && 
        <FarmCrop 
        handleModalToggle={handleModalToggle}
        showModal={showModal }
          />}
      </div>
    </>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = farm.map((farm) => ({
    params: { id: farm.id.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const farms = farm.find((farm) => farm.id.toString() === params.id)
  return {
    props: {
      farms,
    },
  }
}
