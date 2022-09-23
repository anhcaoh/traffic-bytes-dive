import Head from 'next/head'
import TrafficBytesDive from '../features/TrafficBytesDive'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Traffic Bytes Dive</title>
        <meta name="description" content="Dive and navigate through IP address traffic and its sum bytes" />

      </Head>
      <main className={styles.main}>
        <TrafficBytesDive />
      </main>
    </div>
  )
}
