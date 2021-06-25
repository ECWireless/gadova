import Head from 'next/head'
import Image from 'next/image'
import { GU } from 'components/theme'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <h1>
          GaDova
        </h1>
      </main>
    </div>
  )
}
