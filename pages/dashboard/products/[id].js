import { CropData } from '../../../utils/data'
import Layout from '../../../components/Dashboard/Layout'
import Image from 'next/image'

export default function CropDetails({ crop }) {
  return (
    <Layout>

    <>
    <div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>

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


