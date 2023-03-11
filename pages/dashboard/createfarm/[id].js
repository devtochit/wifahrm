import { farm } from '../../../utils/data'
import Layout from '../../../components/Dashboard/Layout'
import Image from 'next/image'
import Button from '../../../components/Button'
import FarmCrop from '../../../components/Farmcrop'
import React, { useState } from 'react';
import FarmDetails from '../../../components/FarmCard/CropDetails'


export default function CropDetails({ farms }) {

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  
  return (
    <Layout>
    <>
    <div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' >
    
    <FarmDetails
    name={farm.name}
    location={farm.location}
    imageSrc={farm.imageSrc}
    amountPlanted={farm.amountPlanted}
    cropActualDuration={farm.cropActualDuration}
    cropName={farm.cropName}
    harvestDate={farm.harvestDate}
  
    />

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
