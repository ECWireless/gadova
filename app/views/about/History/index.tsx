import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { ButtonRound } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

export const History: React.FC = () => {
  return (
    <Container>
      <Spacer size={'lg'} />
      <Flex respondFlip={true} justify={'space-between'}>
        <StyledPhoto />
        <StyledTextContainer>
          <Fade ssrFadeout>
            <ButtonRound>
              What we do
            </ButtonRound>
          </Fade>
          <Spacer size={'sm'} />
          <Fade bottom ssrFadeout>
            <H4 weight={700}>History in Product Development</H4>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={200} bottom ssrFadeout>
            <P3 weight={300}>
              Our two founders, Bill Monski and Fahd Alraddadi, met when they were working 
              as electrical engineers at MEDRAD Inc in the early 90’s. They worked on a number 
              of medical electronics projects, many of which received U. S. patents.
            </P3>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={400} bottom ssrFadeout>
            <P3 weight={300}>
              On Aril 26th, 2007 they decided to set off on their own and launch MR Medical 
              Solutions. MR Medical Solutions was a success from the very beginning due to 
              the contacts and reputations of Bill and Fahad. As time went on, MR Medical 
              Solutions branched out to other industries outside of the realm of medical 
              electronics. In light of these new business projects and opportunities, they 
              decided in June of 2017 that MR Medical solutions should change its name to 
              GaDova to reflect the growth and expanded vision of our company.
            </P3>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={600} bottom ssrFadeout>
            <P3 weight={300}>
              GaDova now offers a wide array of services having evolved into an Independent 
              Design House that can provide customers with vertically integrated design and 
              manufacturing capabilities.
            </P3>
          </Fade>
        </StyledTextContainer>
      </Flex>
      <Spacer size={'lg'} />
    </Container>
  )
}

const StyledPhoto = styled.div`
  background: blue;
  height: ${GU * 100}px;
  margin-top: ${GU * 8}px;
  width: 100%;

  ${media.xs`
    margin-top: ${GU * 16}px;
  `}

  ${media.lg`
    height: auto;
    margin-top: 0;
    width: 38%;
  `}
`;

const StyledTextContainer = styled.div`
  width: 100%;

  ${media.lg`
    width: 58%;
  `}
`;
