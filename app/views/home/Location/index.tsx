import React from 'react';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3, H4, P3, P4 } from 'components/Typography';

export const Location: React.FC = () => {
  return (
    <Container>
      <Spacer size={'md'} />
      <Flex justify={'space-between'} respondFlip={true}>
        <StyledMap
          src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.1223447260822!2d-79.92300508459596!3d40.49467755881897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f29e47cbc47d%3A0x51588f6a43dd2a0d!2s1822%20Main%20St%2C%20Pittsburgh%2C%20PA%2015215!5e0!3m2!1sen!2sus!4v1625329727517!5m2!1sen!2sus'}
          frameBorder={0} style={{ border: 0}} aria-hidden={'false'} tabIndex={0} loading={'lazy'}
        />
        <StyledTextContainer justify={'center'} direction={'column'}>
          <H4 uppercase={true} weight={600}>Located in</H4>
          <H3 uppercase={true} weight={600}>Pittsburgh, PA</H3>
          <Spacer size={'sm'} />
          <P3>We are proudly doing our part to help restore America’s prominence in engineering and manufacturing.</P3>
          <Spacer size={'sm'} />
          <P4 weight={300}>Construction of our brand new 12,000 square foot, state of the art manufacturing facility in Butler, PA was recently completed</P4>
        </StyledTextContainer>
      </Flex>
      <Spacer size={'md'} />
    </Container>
  )
}

const StyledMap = styled.iframe`
  height: ${GU * 80}px;
  width: 100%;
  ${media.lg`
    width: 55%;
    height: ${GU * 120}px;
  `}
  ${media.xl`
    height: ${GU * 150}px;
  `}
`

const StyledTextContainer = styled(Flex)`
  margin-bottom: ${GU * 10}px;
  width: 100%;

  ${media.lg`
    margin-bottom: 0;
    width: 40%;
  `}
`;
