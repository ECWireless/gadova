import Head from 'next/head';
import { GetServerSideProps } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import client from 'client';

import { Contact as ContactForm } from 'views/home';
import { ContactInfo } from 'views/contact';
import { Main } from 'components/Main';

const Contact: React.FC = ({ homeProps, contactProps }: { [key: string]: any}) => {
  const {
    contactHeading,
    contactBackgroundImage,
  } = homeProps
  const {
    contactSubheading,
    contactPhoneNumber,
    contactEmailAddress,
    contactAddressLine1,
    contactAddressLine2,
  } = contactProps;

  return (
    <div>
      <Head>
        <title>Contact | GaDova</title>
      </Head>

      <Main>
        <ContactForm
          contactHeading={contactHeading}
          contactBackgroundImage={urlFor(contactBackgroundImage)}
        />
        <ContactInfo
          contactSubheading={contactSubheading}
          contactPhoneNumber={contactPhoneNumber}
          contactEmailAddress={contactEmailAddress}
          contactAddressLine1={contactAddressLine1}
          contactAddressLine2={contactAddressLine2}
        />
      </Main>
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
  const contactProps = await client.fetch(`*[_type == "contact" && slug.current == "v1"][0] {
    contactSubheading,
    contactPhoneNumber,
    contactEmailAddress,
    contactAddressLine1,
    contactAddressLine2,
	}`)
	return {
	  props: { homeProps, contactProps },
	}
}

export default Contact;
