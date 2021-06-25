import Head from 'next/head';
import { GU } from 'components/theme'

const Services: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Services | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <h1>
          Services
        </h1>
      </main>
    </div>
  )
}

export default Services;
