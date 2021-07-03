import Head from 'next/head'
import { GetServerSideProps } from 'next'
import client from 'client';
import imageUrlBuilder from '@sanity/image-url'

import { Hero, Services, Features, Location, Contact } from 'views/home';

const Home: React.FC = ({ homeProps }: { [key: string]: any} ) => {
  const {
		heroHeading,
		heroSubheading,
    servicesHeading,
    servicesParagraph,
    servicesExamples1Heading,
    servicesExamples1Item1,
    servicesExamples1Item2,
    servicesExamples1Item3,
    servicesExamples1Item4,
    servicesExamples1Item5,
    servicesExamples1Item6,
    servicesExamples2Heading,
    servicesExamples2Item1,
    servicesExamples2Item2,
    servicesExamples2Item3,
    servicesExamples2Item4,
    servicesExamples2Item5,
    servicesExamples2Item6,
    servicesExamples3Heading,
    servicesExamples3Item1,
    servicesExamples3Item2,
    servicesExamples3Item3,
    servicesExamples3Item4,
    servicesExamples3Item5,
    servicesExamples3Item6,
    servicesDescriptionImage,
    servicesDescriptionHeading,
    servicesDescriptionSubheading,
    servicesDescriptionParagraph1,
    servicesDescriptionParagraph2,
    features1Heading,
    features1Paragraph,
    features1Image,
    features2Heading,
    features2Paragraph,
    features2Image,
    features3Heading,
    features3Paragraph,
    features3Image,
    locationSubheading,
    locationHeading,
    locationParagraph1,
    locationParagraph2,
    contactHeading,
    contactBackgroundImage,
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
        <Services
          servicesHeading={servicesHeading}
          servicesParagraph={servicesParagraph}
          servicesExamples1Heading={servicesExamples1Heading}
          servicesExamples1Item1={servicesExamples1Item1}
          servicesExamples1Item2={servicesExamples1Item2}
          servicesExamples1Item3={servicesExamples1Item3}
          servicesExamples1Item4={servicesExamples1Item4}
          servicesExamples1Item5={servicesExamples1Item5}
          servicesExamples1Item6={servicesExamples1Item6}
          servicesExamples2Heading={servicesExamples2Heading}
          servicesExamples2Item1={servicesExamples2Item1}
          servicesExamples2Item2={servicesExamples2Item2}
          servicesExamples2Item3={servicesExamples2Item3}
          servicesExamples2Item4={servicesExamples2Item4}
          servicesExamples2Item5={servicesExamples2Item5}
          servicesExamples2Item6={servicesExamples2Item6}
          servicesExamples3Heading={servicesExamples3Heading}
          servicesExamples3Item1={servicesExamples3Item1}
          servicesExamples3Item2={servicesExamples3Item2}
          servicesExamples3Item3={servicesExamples3Item3}
          servicesExamples3Item4={servicesExamples3Item4}
          servicesExamples3Item5={servicesExamples3Item5}
          servicesExamples3Item6={servicesExamples3Item6}
          servicesDescriptionImage={urlFor(servicesDescriptionImage)}
          servicesDescriptionHeading={servicesDescriptionHeading}
          servicesDescriptionSubheading={servicesDescriptionSubheading}
          servicesDescriptionParagraph1={servicesDescriptionParagraph1}
          servicesDescriptionParagraph2={servicesDescriptionParagraph2}
        />
        <Features
          features1Heading={features1Heading}
          features1Paragraph={features1Paragraph}
          features1Image={urlFor(features1Image)}
          features2Heading={features2Heading}
          features2Paragraph={features2Paragraph}
          features2Image={urlFor(features2Image)}
          features3Heading={features3Heading}
          features3Paragraph={features3Paragraph}
          features3Image={urlFor(features3Image)}
        />
        <Location
          locationSubheading={locationSubheading}
          locationHeading={locationHeading}
          locationParagraph1={locationParagraph1}
          locationParagraph2={locationParagraph2}
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
		heroHeading,
		heroSubheading,
    servicesHeading,
    servicesParagraph,
    servicesExamples1Heading,
    servicesExamples1Item1,
    servicesExamples1Item2,
    servicesExamples1Item3,
    servicesExamples1Item4,
    servicesExamples1Item5,
    servicesExamples1Item6,
    servicesExamples2Heading,
    servicesExamples2Item1,
    servicesExamples2Item2,
    servicesExamples2Item3,
    servicesExamples2Item4,
    servicesExamples2Item5,
    servicesExamples2Item6,
    servicesExamples3Heading,
    servicesExamples3Item1,
    servicesExamples3Item2,
    servicesExamples3Item3,
    servicesExamples3Item4,
    servicesExamples3Item5,
    servicesExamples3Item6,
    servicesDescriptionImage,
    servicesDescriptionHeading,
    servicesDescriptionSubheading,
    servicesDescriptionParagraph1,
    servicesDescriptionParagraph2,
    features1Heading,
    features1Paragraph,
    features1Image,
    features2Heading,
    features2Paragraph,
    features2Image,
    features3Heading,
    features3Paragraph,
    features3Image,
    locationSubheading,
    locationHeading,
    locationParagraph1,
    locationParagraph2,
    contactHeading,
    contactBackgroundImage,
	}`)
	return {
	  props: { homeProps },
	}
}

export default Home;
