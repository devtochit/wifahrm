import Head from 'next/head'
import StatsBoard from '../../components/Dashboard/StatsBoard'
import QuickAction from '../../components/Dashboard/QuickAction'
import Countdown from '../../components/Dashboard/Countdown'
import Notification from "../../components/Dashboard/Notification"
// import ClientsFeed from '../../components/Dashboard/ClientsFeed'
// import BestSellers from '../../components/Dashboard/BestSellers'
import LineChart from '../../components/Charts/LineChart'
// import BarChart from '../../components/Charts/BarChart'
import Layout from '../../components/Dashboard/shared/components/Dashboard'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CropPlanted from '../../components/Dashboard/CropPlanted/CropPlanted'



const withAuth = (Component) => {
	const Auth = (props) => {
		const { isLoggedIn, userData } = useSelector((state) => state.authReducers.Authentication);
		const router = useRouter();

		useEffect(() => {
			if (!isLoggedIn) {
				router.replace('/login');
			}
		}, [isLoggedIn, router]);

		if (!isLoggedIn) {
			return null; // or return a loading indicator
		}

		return <Component {...props} />;
	};

	return Auth;
};


const Dashboard = () => {
	return (
		<Layout>
			<Head>
				<title>Dashboard</title>
			</Head>
			<h1 className='text-xl font-bold  pb-4'>Dashboard</h1>

			<div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' >
				<StatsBoard />
				<div className="grid lg:grid-cols-[1fr_auto] my-12 gap-y-12 gap-x-8">
					<div className="lg:col-start-2">
						<div className="flex flex-col xs:flex-row flex-wrap justify-between lg:max-w-[18rem] gap-12">
							<QuickAction />
							<Countdown />
						</div>
					</div>

					<div className="flex flex-col lg:row-start-1 lg:row-end-3 min-w-0 gap-y-12">
						<div className="h-72">
							<LineChart />
						</div>

						<CropPlanted />
					</div>
					<div className="">
						{/* <ClientsFeed /> */}

					</div>

					<div className='rounded-3xl bg-primary/10 dark:bg-gray-600 lg:col-start-3 lg:row-start-1 w-72'>
						<Notification />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Dashboard;
