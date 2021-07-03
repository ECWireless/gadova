import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3, H4, P3, P4 } from 'components/Typography';

interface LocationProps {
  locationSubheading: string;
  locationHeading: string;
  locationParagraph1: string;
  locationParagraph2: string;
}

export const Location: React.FC<LocationProps> = ({
  locationSubheading,
  locationHeading,
  locationParagraph1,
  locationParagraph2,
}) => {
  return (
    <Container>
      <Spacer size={'md'} />
      <Flex justify={'space-between'} respondFlip={true}>
        <StyledMap
          src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.1223447260822!2d-79.92300508459596!3d40.49467755881897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f29e47cbc47d%3A0x51588f6a43dd2a0d!2s1822%20Main%20St%2C%20Pittsburgh%2C%20PA%2015215!5e0!3m2!1sen!2sus!4v1625329727517!5m2!1sen!2sus'}
          frameBorder={0} style={{ border: 0}} aria-hidden={'false'} tabIndex={0} loading={'lazy'}
        />
        <StyledTextContainer justify={'center'} direction={'column'}>
          <Fade bottom ssrFadeout>
            <H4 uppercase={true} weight={600}>{locationSubheading}</H4>
          </Fade>
          <Fade delay={200} bottom ssrFadeout>
            <H3 uppercase={true} weight={600}>{locationHeading}</H3>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={400} bottom ssrFadeout>
            <P3>{locationParagraph1}</P3>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={600} bottom ssrFadeout>
            <P4 weight={300}>{locationParagraph2}</P4>
          </Fade>
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
