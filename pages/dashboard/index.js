import Head from 'next/head'
import StatsBoard from '../../components/Dashboard/StatsBoard'
import QuickAction from '../../components/Dashboard/QuickAction'
import Countdown from '../../components/Dashboard/Countdown'
import ClientsFeed from '../../components/Dashboard/ClientsFeed'
import BestSellers from '../../components/Dashboard/BestSellers'
import LineChart from '../../components/Charts/LineChart'
import BarChart from '../../components/Charts/BarChart'
import Layout from '../../components/Dashboard/Layout'


const Dashboard = ()=> (
  <Layout >
    <Head>
      <title> Dashboard</title>
    </Head>
    <h1 className='text-xl font-bold pb-4'>Dashboard</h1>
    
    <div className='w-full min-h-main  p-4 sm:p-6 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded' >

		<div>
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
					<div className="flex">
						<div className="h-72 w-full mb-6">
							<BarChart />
						</div>
					</div>
					<BestSellers />
				</div>
					<div className="">
					{/* <ClientsFeed /> */}
				</div> 
			</div> 
		</div>
</div>
  </Layout>
)

export default Dashboard
