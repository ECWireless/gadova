import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url'
import client from 'client';
import { GetServerSideProps } from 'next'
import { GU } from 'components/theme';

import { History } from 'views/about';

const About: React.FC = ({ aboutProps }: { [key: string]: any}) => {
  const {
		aboutHeading,
    aboutDescription,
    aboutImage,
  } = aboutProps

  return (
    <div>
      <Head>
        <title>About | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <History
          aboutHeading={aboutHeading}
          aboutDescription={aboutDescription}
          aboutImage={urlFor(aboutImage)}
        />
      </main>
    </div>
  )
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const aboutProps = await client.fetch(`*[_type == "about" && slug.current == "v1"][0] {
		aboutHeading,
    aboutDescription,
    aboutImage,
	}`)
	return {
	  props: { aboutProps },
	}
}

export default About;

