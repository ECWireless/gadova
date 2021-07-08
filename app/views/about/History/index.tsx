import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { ButtonRound } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3Block } from 'components/Typography';

interface HistoryProps {
  aboutHeading: string;
  aboutDescription: string;
  aboutImage: any;
}

export const History: React.FC<HistoryProps> = ({
  aboutHeading,
  aboutDescription,
  aboutImage,
}) => {
  return (
    <Container>
      <Spacer size={'lg'} />
      <Flex respondFlip={true} justify={'space-between'}>
        <StyledPhoto style={{ backgroundImage: `url(${aboutImage})`}} />
        <StyledTextContainer>
          <Fade ssrFadeout>
            <ButtonRound>
              What we do
            </ButtonRound>
          </Fade>
          <Spacer size={'sm'} />
          <Fade bottom ssrFadeout>
            <H4 weight={700} uppercase={true}>
              {aboutHeading}
            </H4>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={200} bottom ssrFadeout>
            <P3Block>
              <BlockContent
                blocks={aboutDescription}
              />
            </P3Block>
          </Fade>
        </StyledTextContainer>
      </Flex>
      <Spacer size={'md'} />
    </Container>
  )
}

const StyledPhoto = styled.div`
  background-position: center;
  background-size: cover;
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
