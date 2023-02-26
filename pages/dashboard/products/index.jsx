
import Image from 'next/image'
import Layout from '../../../components/Dashboard/Layout'
import { CropData } from '../../../utils/data'
import ProductCard from '../../../components/ProductCard'
import Select from "react-select";
import Link from 'next/link';




const product = ()=> (
  <Layout >
    
    <div className="navbar  flex flex-row justify-end px-12">
		<div className="dropdown dropdown-start w-80 ">
			<Select
				// options={uniqueRevenueTypesArr}
				placeholder="All product Avalable"
				// value={filterInitialData}
				// onChange={(e) => updateValue(e)}
				isMulti
			/>
		</div>
		</div>
    <h1 className='text-xl font-bold pb-4'>products</h1>
    <div className='w-full min-h-main p-4 sm:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' >

     <div className="w-full h-full flex flex-row items-center justify-center lg:px-32  py-4 gap-5 flex-wrap">
     { 
      CropData.map((product,index)=>(
      
   <Link key={index}  href={`/dashboard/products/${product.id}`}> 
    <a> 
    <ProductCard
    key={index}
          product={product}
            />
    </a>
    </Link>
          ))}
            </div> 
    </div>

  </Layout>
)

export default product
