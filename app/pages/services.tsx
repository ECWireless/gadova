import Head from 'next/head';
import { GetServerSideProps } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import client from 'client';
import { GU } from 'components/theme'

import { Contact } from 'views/home';
import { Description } from 'views/services';

const Services: React.FC = ({ homeProps }: { [key: string]: any}) => {
  const {
    contactHeading,
    contactBackgroundImage,
  } = homeProps

  return (
    <div>
      <Head>
        <title>Services | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <Description />
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
	return {
	  props: { homeProps },
	}
}

export default Services;
