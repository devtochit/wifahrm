import React from 'react'
import Layout from '../../../components/Dashboard/Layout'
import Head from 'next/head'
import Button from '../../../components/Button'
import { farm } from '../../../utils/data'
import FarmerCard from '../../../components/famercard'
import Link from 'next/link'


function createcrops() {
  return (
    <Layout>
      <Head>
      <title> Dashboard</title>
    </Head>
    <h1 className='text-xl font-bold pb-4'>Dashboard</h1>
    <div className=" flex flex-row justify-end px-12">
    <Button price={'ADD Farm'}/>
		</div>
    <div className="w-full h-full flex flex-row items-center justify-center lg:px-32  py-4 gap-5 flex-wrap">
        {farm.map((farms) => (
            <Link k href={`/dashboard/createfarm/${farms.id}`}> 
            <a>
            <FarmerCard
            farm={farms} />
          </a> 
          </Link > 
          ))}

      </div>
    </Layout>
  )
}

export default createcrops