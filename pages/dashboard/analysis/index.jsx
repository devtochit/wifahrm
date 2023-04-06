import Layout from '../../../components/Dashboard/shared/components/Dashboard'
import LineChart from '../../../components/Charts/LineChart'
import BarChart from '../../../components/Charts/BarChart'
import Head from 'next/head'

const Analysis = () => {
    return (
        <Layout>
            <Head>
                <title>Analysis</title>
            </Head>
            <main>
                <h2 className='text-lg font-bold mb-3'>Analysis</h2>
                <div className="grid gap-8 min-h-[900px]">
                    <BarChart />
                    <LineChart />
                </div>

            </main>
        </Layout>
    )
}

export default Analysis