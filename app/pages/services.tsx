import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import imageUrlBuilder from '@sanity/image-url';
import client from 'client';

import { Contact } from 'views/home';
import { Description, Types, Gallery, MoreTypes } from 'views/services';
import { Main } from 'components/Main';

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

  const service1Ref = React.useRef(null);
  const service2Ref = React.useRef(null);
  const service3Ref = React.useRef(null);
  const service4Ref = React.useRef(null);
  const service5Ref = React.useRef(null);
  const service6Ref = React.useRef(null);
  const service7Ref = React.useRef(null);
  const service8Ref = React.useRef(null);
  const service9Ref = React.useRef(null);
  const service10Ref = React.useRef(null);
  const service11Ref = React.useRef(null);
  const service12Ref = React.useRef(null);

  const onScrollToServices = (serviceNumber: number) => {
    switch (serviceNumber) {
      case 1:
        service1Ref.current.scrollIntoView();
        break;
      case 2:
        service2Ref.current.scrollIntoView();
        break;
      case 3:
        service3Ref.current.scrollIntoView();
        break;
      case 4:
        service4Ref.current.scrollIntoView();
        break;
      case 5:
        service5Ref.current.scrollIntoView();
        break;
      case 6:
        service6Ref.current.scrollIntoView();
        break;
      case 7:
        service7Ref.current.scrollIntoView();
        break;
      case 8:
        service8Ref.current.scrollIntoView();
        break;
      case 9:
        service9Ref.current.scrollIntoView();
        break;
      case 10:
        service10Ref.current.scrollIntoView();
        break;
      case 11:
        service11Ref.current.scrollIntoView();
        break;
      case 12:
        service12Ref.current.scrollIntoView();
        break;
    
      default:
        break;
    }
  }

  return (
    <div>
      <Head>
        <title>Services | GaDova</title>
      </Head>

      <Main>
        <Description
          onScrollToServices={onScrollToServices}
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
          service1Ref={service1Ref}
          service2Ref={service2Ref}
          service3Ref={service3Ref}
          service4Ref={service4Ref}
          service5Ref={service5Ref}
          service6Ref={service6Ref}
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
        <MoreTypes
          service7Ref={service7Ref}
          service8Ref={service8Ref}
          service9Ref={service9Ref}
          service10Ref={service10Ref}
          service11Ref={service11Ref}
          service12Ref={service12Ref}
          servicesMoreType1Heading={servicesMoreType1Heading}
          servicesMoreType1Paragraph={servicesMoreType1Paragraph}
          servicesMoreType2Heading={servicesMoreType2Heading}
          servicesMoreType2Paragraph={servicesMoreType2Paragraph}
          servicesMoreType3Heading={servicesMoreType3Heading}
          servicesMoreType3Paragraph={servicesMoreType3Paragraph}
          servicesMoreType4Heading={servicesMoreType4Heading}
          servicesMoreType4Paragraph={servicesMoreType4Paragraph}
          servicesMoreType5Heading={servicesMoreType5Heading}
          servicesMoreType5Paragraph={servicesMoreType5Paragraph}
          servicesMoreType6Heading={servicesMoreType6Heading}
          servicesMoreType6Paragraph={servicesMoreType6Paragraph}
        />
        <Contact
          contactHeading={contactHeading}
          contactBackgroundImage={urlFor(contactBackgroundImage)}
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
