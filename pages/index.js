import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Get Pet</title>
        <meta name="description" content="pet services in Chicago" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main>
        <h1>Homepage</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, minima.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, nemo?</p>
      </main>
    </>
  )
}
