import Head from 'next/head';
import { GU } from 'components/theme';

import { History } from 'views/about';

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <History />
      </main>
    </div>
  )
}

export default About;
