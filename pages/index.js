import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Description from '@/components/Description'

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
        <Hero />
        <Description />
        <section>
          <h1>services highlight</h1>
        </section>
        <section>
          <h1>reviews</h1>
        </section>
      </main>

    </>
  )
}
