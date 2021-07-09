import React from 'react';
import { Fade } from 'react-reveal';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

interface MoreTypesProps {
  servicesMoreType1Heading: string;
  servicesMoreType1Paragraph: string;
  servicesMoreType2Heading: string;
  servicesMoreType2Paragraph: string;
  servicesMoreType3Heading: string;
  servicesMoreType3Paragraph: string;
  servicesMoreType4Heading: string;
  servicesMoreType4Paragraph: string;
  servicesMoreType5Heading: string;
  servicesMoreType5Paragraph: string;
  servicesMoreType6Heading: string;
  servicesMoreType6Paragraph: string;
}

export const MoreTypes: React.FC<MoreTypesProps> = ({
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
}) => {
  return (
    <Container>
      <Spacer size={'lg'} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesMoreType1Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesMoreType1Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesMoreType2Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesMoreType2Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesMoreType3Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesMoreType3Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesMoreType4Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesMoreType4Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesMoreType5Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesMoreType5Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesMoreType6Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesMoreType6Paragraph}
        </P3>
      </Fade>
      <Spacer size={'lg'} />
    </Container>
  )
}
