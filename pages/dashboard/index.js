import Head from 'next/head'
import StatsBoard from '../../components/Dashboard/StatsBoard'
import QuickAction from '../../components/Dashboard/QuickAction'
// import Countdown from '../../components/Dashboard/Countdown'
import Notification from "../../components/Dashboard/Notification"
// import ClientsFeed from '../../components/Dashboard/ClientsFeed'
// import BestSellers from '../../components/Dashboard/BestSellers'
import LineChart from '../../components/Charts/LineChart'
import BarChart from '../../components/Charts/BarChart'
import Layout from '../../components/Dashboard/shared/components/Dashboard'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CropPlanted from '../../components/Dashboard/CropPlanted/CropPlanted'
import protectRoute from '../../components/hoc/protectedroute'
import dynamic from 'next/dynamic';
const Countdown = dynamic(() => import('../../components/Dashboard/Countdown'), {
	ssr: false
  });

const Dashboard = () => {
	return (
		<Layout>
			<>
				<Head>
					<title>Dashboard</title>
				</Head>

				<div className='grid grid-cols-1 lg:grid-cols-6 gap-8' >
					<div className='lg:col-span-6'>
						<StatsBoard />
					</div>
					<div className="flex flex-col lg:col-span-4 gap-8">
						<div className='rounded-3xl bg-primary/10 dark:bg-gray-600'>
							<Notification />
						</div>

					</div>

					<div className="flex flex-col gap-8 lg:col-span-2">

						<div className="grid xs:grid-cols-2 gap-8 lg:grid-cols-1">
							<QuickAction />
							<Countdown />
						</div>

					</div>
				</div>
				<div className='lg:col-span-5'>
					<CropPlanted />
				</div>
			</>
		</Layout >
	)
}

export default Dashboard;
