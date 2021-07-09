import React from 'react';
import { Fade } from 'react-reveal';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

interface TypesProps {
  service1Ref: React.MutableRefObject<any>;
  service2Ref: React.MutableRefObject<any>;
  service3Ref: React.MutableRefObject<any>;
  service4Ref: React.MutableRefObject<any>;
  service5Ref: React.MutableRefObject<any>;
  service6Ref: React.MutableRefObject<any>;
  servicesType1Heading: string;
  servicesType1Paragraph: string;
  servicesType2Heading: string;
  servicesType2Paragraph: string;
  servicesType3Heading: string;
  servicesType3Paragraph: string;
  servicesType4Heading: string;
  servicesType4Paragraph: string;
  servicesType5Heading: string;
  servicesType5Paragraph: string;
  servicesType6Heading: string;
  servicesType6Paragraph: string;
}

export const Types: React.FC<TypesProps> = ({
  service1Ref,
  service2Ref,
  service3Ref,
  service4Ref,
  service5Ref,
  service6Ref,
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
}) => {
  return (
    <Container>
      <Spacer size={'lg'} />
      <div style={{ transform: 'translateY(-150px)' }} ref={service1Ref} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesType1Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesType1Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <div style={{ transform: 'translateY(-150px)' }} ref={service2Ref} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesType2Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesType2Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <div style={{ transform: 'translateY(-150px)' }} ref={service3Ref} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesType3Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesType3Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <div style={{ transform: 'translateY(-150px)' }} ref={service4Ref} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesType4Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesType4Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <div style={{ transform: 'translateY(-150px)' }} ref={service5Ref} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesType5Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesType5Paragraph}
        </P3>
      </Fade>
      <Spacer size={'md'} />
      <div style={{ transform: 'translateY(-150px)' }} ref={service6Ref} />
      <Fade bottom ssrFadeout>
        <H4 align={'left'} weight={700} uppercase={true}>
          {servicesType6Heading}
        </H4>
      </Fade>
      <Spacer size={'xs'} />
      <Fade delay={200} bottom ssrFadeout>
        <P3 align={'left'} weight={200}>
          {servicesType6Paragraph}
        </P3>
      </Fade>
      <Spacer size={'lg'} />
    </Container>
  )
}
