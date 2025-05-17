import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sync Money Supervision - Pricing Dashboard</title>
        <meta name="description" content="Comprehensive music supervision pricing guide and service overview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Dashboard />
    </>
  )
}