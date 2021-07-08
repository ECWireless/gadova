import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url'
import client from 'client';
import { GetServerSideProps } from 'next'
import { GU } from 'components/theme';

import { History, Services } from 'views/about';

const About: React.FC = ({ aboutProps }: { [key: string]: any}) => {
  const {
		aboutHeading,
    aboutDescription,
    aboutImage,
    aboutServicesHeading,
    aboutServicesItem1,
    aboutServicesItem2,
    aboutServicesItem3,
    aboutServicesItem4,
    aboutServicesItem5,
    aboutServicesItem6,
    aboutServicesImage,
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
        <Services
          aboutServicesHeading={aboutServicesHeading}
          aboutServicesItem1={aboutServicesItem1}
          aboutServicesItem2={aboutServicesItem2}
          aboutServicesItem3={aboutServicesItem3}
          aboutServicesItem4={aboutServicesItem4}
          aboutServicesItem5={aboutServicesItem5}
          aboutServicesItem6={aboutServicesItem6}
          aboutServicesImage={urlFor(aboutServicesImage)}
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
    aboutServicesHeading,
    aboutServicesItem1,
    aboutServicesItem2,
    aboutServicesItem3,
    aboutServicesItem4,
    aboutServicesItem5,
    aboutServicesItem6,
    aboutServicesImage,
	}`)
	return {
	  props: { aboutProps },
	}
}

export default About;

