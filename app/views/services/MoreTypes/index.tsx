import React from 'react';
import { Fade } from 'react-reveal';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

interface MoreTypesProps {
  service7Ref: React.MutableRefObject<any>;
  service8Ref: React.MutableRefObject<any>;
  service9Ref: React.MutableRefObject<any>;
  service10Ref: React.MutableRefObject<any>;
  service11Ref: React.MutableRefObject<any>;
  service12Ref: React.MutableRefObject<any>;
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
  service7Ref,
  service8Ref,
  service9Ref,
  service10Ref,
  service11Ref,
  service12Ref,
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
      <div style={{ transform: 'translateY(-150px)' }} ref={service7Ref} />
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
      <div style={{ transform: 'translateY(-150px)' }} ref={service8Ref} />
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
      <div style={{ transform: 'translateY(-150px)' }} ref={service9Ref} />
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
      <div style={{ transform: 'translateY(-150px)' }} ref={service10Ref} />
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
      <div style={{ transform: 'translateY(-150px)' }} ref={service11Ref} />
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
      <div style={{ transform: 'translateY(-150px)' }} ref={service12Ref} />
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
