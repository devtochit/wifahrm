import { CropData } from '../../../utils/data'
import Layout from '../../../components/Dashboard/Layout'
import Image from 'next/image'
export default function cropDetails({ crop }) {
  return (
    <Layout>
    <>
      <div key={crop.id} className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-5xl lg:px-8 pb-8 ">
        <div className="flex flex-col lg:flex-row bg-[#f7f7f7] rounded-lg overflow-hidden ">
          {/* Product Image */}
          <div className="bg-[#EFE9D9] flex items-center basis-1/2 p-2">
            <Image className="w-full" src={crop.imageSrc} alt={crop.name} />
          </div>

          {/* Product Details */}
          <div className="mt-6 pl-8 pr-8 pb-8 basis-1/2">
            <h1 className="text-[#1a1a1a] mb-2 font-fraunces font-normal text-4xl leading-none">
              {crop.name}
            </h1>
            {/* <p className="text-[#a7a597] mb-2 text-sm">{selectedColor.name}</p> */}
            <p className="text-[#1a1a1a] mb-2 text-sm leading-6">
              {crop.Due}
            </p>
            <hr className="h-px my-4 bg-[#ddd] border-0 dark:bg-[#ddd]"></hr>

            {/* Add to Cart Button */}
            {/* <div className="grid place-items-center mb-10">
              <Button price={product.price} />
              <span className="text-sm text-gray-600 mt-2">
                Free US Shipping $120+
              </span>
            </div> */}

            <p className="text-[#1a1a1a] pb-6 text-sm leading-6">
              {" "}
              Slim, classic Italian made wallet made to go the distance.
              Features the ability to hold 3 cards in a compact, vegetable
              tanned case. Il Bussetto's rich history of impeccably handcrafted
              leather goods culminates in an incredible assortment of functional
              wallets and cardholders.
            </p>
            <p className="text-[#1a1a1a] pb-6 text-sm leading-6">
              {" "}
              Slim, classic Italian made wallet made to go the distance.
              Features the ability to hold 3 cards in a compact, vegetable
              tanned case. Il Bussetto's rich history of impeccably handcrafted
              leather goods culminates in an incredible assortment of functional
              wallets and cardholders.
            </p>
            <p className="text-[#1a1a1a] pb-6 text-sm leading-6">
              {" "}
              Slim, classic Italian made wallet made to go the distance.
              Features the ability to hold 3 cards in a compact, vegetable
              tanned case. Il Bussetto's rich history of impeccably handcrafted
              leather goods culminates in an incredible assortment of functional
              wallets and cardholders.
            </p>
          </div>
        </div>
      </div>
    </>

    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = CropData.map((crop) => ({
    params: { id: crop.id.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const crop = CropData.find((crop) => crop.id.toString() === params.id)
  return {
    props: {
      crop,
    },
  }
}
