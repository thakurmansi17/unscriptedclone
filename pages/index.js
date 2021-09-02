import Head from 'next/head'
import Homepage from "../components/Home"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Unscripted By ScoopWhoop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage></Homepage>
    </div>
  )
}
