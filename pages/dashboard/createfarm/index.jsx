import React, { useState } from 'react';
import Layout from '../../../components/Dashboard/Layout';
import Head from 'next/head';
import Button from '../../../components/Button';
import { farm } from '../../../utils/data';
import FarmerCard from '../../../components/famercard';
import Link from 'next/link';
import FarmForm from '../../../components/FarmForm';

function CreateCrops() {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1 className='text-xl font-bold pb-4'>Dashboard</h1>
      <div className='flex flex-row justify-end px-12'>
        <Button price={'ADD Farm'} onClick={handleModalToggle} />
      </div>
      <div className='w-full h-full flex flex-row items-center justify-center lg:px-32 py-4 gap-5 flex-wrap'>
        {farm.map((farm, index) => (
          <Link key={index} href={`/dashboard/createfarm/${farm.id}`}>
            <a>
              <FarmerCard key={index} farm={farm} />
            </a>
          </Link>
        ))}
        {showModal && 
        <FarmForm 
        handleModalToggle={handleModalToggle}
        showModal={showModal }
          />}
      </div>
    </Layout>
  );
}

export default CreateCrops;
