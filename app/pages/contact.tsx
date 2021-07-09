import Head from 'next/head';
import { GetServerSideProps } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import client from 'client';
import { GU } from 'components/theme';

import { Contact as ContactForm } from 'views/home';
import { ContactInfo } from 'views/contact';

const Contact: React.FC = ({ homeProps, contactProps }: { [key: string]: any}) => {
  const {
    contactHeading,
    contactBackgroundImage,
  } = homeProps

  return (
    <div>
      <Head>
        <title>Contact | GaDova</title>
      </Head>

      <main style={{ marginTop: `${GU * 25}px`}}>
        <ContactForm
          contactHeading={contactHeading}
          contactBackgroundImage={urlFor(contactBackgroundImage)}
        />
        <ContactInfo />
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
  const contactProps = await client.fetch(`*[_type == "services" && slug.current == "v1"][0] {
    servicesHeading,
	}`)
	return {
	  props: { homeProps, contactProps },
	}
}

export default Contact;
