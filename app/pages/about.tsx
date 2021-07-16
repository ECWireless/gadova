import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url'
import client from 'client';
import { GetServerSideProps } from 'next'

import { History, Services, Certificates } from 'views/about';
import { Main } from 'components/Main';

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
    aboutServicesItem7,
    aboutServicesImage,
    aboutCertificatesHeading,
    aboutCertificatesParagraph,
    aboutCertificate1,
    aboutCertificate2,
  } = aboutProps

  return (
    <div>
      <Head>
        <title>About | GaDova</title>
      </Head>

      <Main>
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
          aboutServicesItem7={aboutServicesItem7}
          aboutServicesImage={urlFor(aboutServicesImage)}
        />
        <Certificates
          aboutCertificatesHeading={aboutCertificatesHeading}
          aboutCertificatesParagraph={aboutCertificatesParagraph}
          aboutCertificate1={urlFor(aboutCertificate1)}
          aboutCertificate2={urlFor(aboutCertificate2)}
        />
      </Main>
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
    aboutServicesItem7,
    aboutServicesImage,
    aboutCertificatesHeading,
    aboutCertificatesParagraph,
    aboutCertificate1,
    aboutCertificate2,
	}`)
	return {
	  props: { aboutProps },
	}
}

export default About;

