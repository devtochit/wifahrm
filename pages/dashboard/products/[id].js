import Layout from '../../../components/Dashboard/Layout'
import Image from 'next/image'
import MarketplaceDetails from '../../../components/FarmCard/FarmDetails'
import axios from 'axios';
import { retrieveUserDetails } from "../../../utils/helperFunctions/userDataHandlers";

export default function CropDetails({ crop }) {
  return (
    <Layout>
      <div className='w-full min-h-main p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded'>
        <MarketplaceDetails
        // imageSrc={crop.imageSrc}
        // havDate={crop.inprice}
        // price={crop.price}
        // Due={crop.Due}
        // description={crop.desc}
        />
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  try {
    // Fetch market data from API endpoint with token
    const getToken = await retrieveUserDetails();
    if (getToken && getToken.data.jwtToken) {
      const token = getToken.data.jwtToken;
      console.log('im trying to see token', token)

      const response = await axios.get(`https://wifarmapi-production.up.railway.app/api/market/getallmarketcrops/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const marketData = response.data;
      console.log('check for data ', response)

      // Find the crop with the specified ID
      const crop = marketData.data.find((crop) => crop.id.toString() === params.id);

      return {
        props: {
          crop,
        },
      };
    }
  } catch (error) {
    console.error(error);
  }

  // If there's an error or no token, return null for the crop
  return {
    props: {
      crop: null,
    },
  };
}
