import Head from 'next/head';
import { GetServerSideProps } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import client from 'client';
import { GU } from 'components/theme'

import { Contact } from 'views/home';
import { Description, Types } from 'views/services';

const Services: React.FC = ({ homeProps, servicesProps }: { [key: string]: any}) => {
  const {
    contactHeading,
    contactBackgroundImage,
  } = homeProps

  const {
    servicesHeading,
    servicesParagraph,
    servicesImage,
    servicesExample1,
    servicesExample2,
    servicesExample3,
    servicesExample4,
    servicesExample5,
    servicesExample6,
    servicesExample7,
    servicesExample8,
    servicesExample9,
    servicesExample10,
    servicesExample11,
    servicesExample12,
  } = servicesProps

  return (
    <div>
      <Head>
        <title>Services | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <Description
          servicesHeading={servicesHeading}
          servicesParagraph={servicesParagraph}
          servicesImage={urlFor(servicesImage)}
          servicesExample1={servicesExample1}
          servicesExample2={servicesExample2}
          servicesExample3={servicesExample3}
          servicesExample4={servicesExample4}
          servicesExample5={servicesExample5}
          servicesExample6={servicesExample6}
          servicesExample7={servicesExample7}
          servicesExample8={servicesExample8}
          servicesExample9={servicesExample9}
          servicesExample10={servicesExample10}
          servicesExample11={servicesExample11}
          servicesExample12={servicesExample12}
        />
        <Types />
        <Contact
          contactHeading={contactHeading}
          contactBackgroundImage={urlFor(contactBackgroundImage)}
        />
      </main>
    </div>
  )
}

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export const getServerSideProps: GetServerSideProps = async () => {
  const homeProps = await client.fetch(`*[_type == "home" && slug.current == "v1"][0] {
    contactHeading,
    contactBackgroundImage,
	}`)
  const servicesProps = await client.fetch(`*[_type == "services" && slug.current == "v1"][0] {
    servicesHeading,
    servicesParagraph,
    servicesImage,
    servicesExample1,
    servicesExample2,
    servicesExample3,
    servicesExample4,
    servicesExample5,
    servicesExample6,
    servicesExample7,
    servicesExample8,
    servicesExample9,
    servicesExample10,
    servicesExample11,
    servicesExample12,
	}`)
	return {
	  props: { homeProps, servicesProps },
	}
}

export default Services;
