import Head from 'next/head';
import { GU } from 'components/theme'

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <h1>
          About
        </h1>
      </main>
    </div>
  )
}

export default About;
