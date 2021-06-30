import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import client from 'client';
import { GU } from 'components/theme'

import { Hero } from 'views/home';

const Home: React.FC = ({ homeProps }: { [key: string]: any} ) => {
  const {
		heroHeading,
		heroSubheading,
   } = homeProps

  return (
    <div>
      <Head>
        <title>GaDova</title>
      </Head>

      <main>
        <Hero
          heroHeading={heroHeading}
          heroSubheading={heroSubheading}
        />
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homeProps = await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
		heroHeading,
		heroSubheading,
	}`)
	return {
	  props: { homeProps },
	}
}

export default Home;
