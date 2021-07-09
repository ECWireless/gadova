import Head from 'next/head';
import { GetServerSideProps } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import client from 'client';
import { GU } from 'components/theme'

import { Contact } from 'views/home';
import { Description, Types, Gallery } from 'views/services';

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
    servicesType1Heading,
    servicesType1Paragraph,
    servicesType2Heading,
    servicesType2Paragraph,
    servicesType3Heading,
    servicesType3Paragraph,
    servicesType4Heading,
    servicesType4Paragraph,
    servicesType5Heading,
    servicesType5Paragraph,
    servicesType6Heading,
    servicesType6Paragraph,
    servicesTypeImage1,
    servicesTypeImage2,
    servicesTypeImage3,
    servicesTypeImage4,
    servicesTypeImage5,
    servicesTypeImage6,
    servicesMoreType1Heading,
    servicesMoreType1Paragraph,
    servicesMoreType2Heading,
    servicesMoreType2Paragraph,
    servicesMoreType3Heading,
    servicesMoreType3Paragraph,
    servicesMoreType4Heading,
    servicesMoreType4Paragraph,
    servicesMoreType5Heading,
    servicesMoreType5Paragraph,
    servicesMoreType6Heading,
    servicesMoreType6Paragraph,
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
        <Types
          servicesType1Heading={servicesType1Heading}
          servicesType1Paragraph={servicesType1Paragraph}
          servicesType2Heading={servicesType2Heading}
          servicesType2Paragraph={servicesType2Paragraph}
          servicesType3Heading={servicesType3Heading}
          servicesType3Paragraph={servicesType3Paragraph}
          servicesType4Heading={servicesType4Heading}
          servicesType4Paragraph={servicesType4Paragraph}
          servicesType5Heading={servicesType5Heading}
          servicesType5Paragraph={servicesType5Paragraph}
          servicesType6Heading={servicesType6Heading}
          servicesType6Paragraph={servicesType6Paragraph}
        />
        <Gallery
          servicesTypeImage1={urlFor(servicesTypeImage1)}
          servicesTypeImage2={urlFor(servicesTypeImage2)}
          servicesTypeImage3={urlFor(servicesTypeImage3)}
          servicesTypeImage4={urlFor(servicesTypeImage4)}
          servicesTypeImage5={urlFor(servicesTypeImage5)}
          servicesTypeImage6={urlFor(servicesTypeImage6)}
        />
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
    servicesType1Heading,
    servicesType1Paragraph,
    servicesType2Heading,
    servicesType2Paragraph,
    servicesType3Heading,
    servicesType3Paragraph,
    servicesType4Heading,
    servicesType4Paragraph,
    servicesType5Heading,
    servicesType5Paragraph,
    servicesType6Heading,
    servicesType6Paragraph,
    servicesTypeImage1,
    servicesTypeImage2,
    servicesTypeImage3,
    servicesTypeImage4,
    servicesTypeImage5,
    servicesTypeImage6,
    servicesMoreType1Heading,
    servicesMoreType1Paragraph,
    servicesMoreType2Heading,
    servicesMoreType2Paragraph,
    servicesMoreType3Heading,
    servicesMoreType3Paragraph,
    servicesMoreType4Heading,
    servicesMoreType4Paragraph,
    servicesMoreType5Heading,
    servicesMoreType5Paragraph,
    servicesMoreType6Heading,
    servicesMoreType6Paragraph,
	}`)
	return {
	  props: { homeProps, servicesProps },
	}
}

export default Services;
