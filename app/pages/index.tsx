import Head from 'next/head'
import Image from 'next/image'
import { GU } from 'components/theme'

import { Hero } from 'views/home';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GaDova</title>
      </Head>

      <main>
        <Hero />
      </main>
    </div>
  )
}
