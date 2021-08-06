import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { P2, P3 } from 'components/Typography';

interface IFounders {
  aboutFounder1Image: any;
  aboutFounder1Name: string;
  aboutFounder1Description: string;
  aboutFounder2Image: any;
  aboutFounder2Name: string;
  aboutFounder2Description: string;
}

export const Founders: React.FC<IFounders> = ({
  aboutFounder1Image,
  aboutFounder1Name,
  aboutFounder1Description,
  aboutFounder2Image,
  aboutFounder2Name,
  aboutFounder2Description,
}) => {
  return (
    <StyledBackground>
      <Container>
        <Spacer size={'md'} />
        <Flex respond={true}>
          <StyledFounderContainer>
            <StyledPic style={{ backgroundImage: `url(${aboutFounder1Image})`, backgroundPosition: 'top center' }} />
            <Spacer size={'md'} />
            <Fade bottom ssrFadeout>
              <P2 uppercase={true} weight={700}>{aboutFounder1Name}</P2>
            </Fade>
            <Spacer size={'sm'} />
            <Fade bottom delay={200} ssrFadeout>
              <P3>{aboutFounder1Description}</P3>
            </Fade>
          </StyledFounderContainer>
          <StyledFounderContainer>
            <StyledPic style={{ backgroundImage: `url(${aboutFounder2Image})`}} />
            <Spacer size={'md'} />
            <Fade bottom ssrFadeout>
              <P2 uppercase={true} weight={700}>{aboutFounder2Name}</P2>
            </Fade>
            <Spacer size={'sm'} />
            <Fade bottom delay={200} ssrFadeout>
              <P3>{aboutFounder2Description}</P3>
            </Fade>
          </StyledFounderContainer>
        </Flex>
        <Spacer size={'md'} />
      </Container>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background: #E3E3E3;
`;

const StyledFounderContainer = styled.div`
  padding: ${GU * 4}px;
  width: 100%;

  ${media.lg`
    width: 50%;
  `}
`;

const StyledPic = styled.div`
  background-position: center;
  background-size: cover;
  height: ${GU * 56}px;
  width: ${GU * 56}px;
`;
