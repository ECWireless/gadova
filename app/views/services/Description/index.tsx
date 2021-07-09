import React from 'react';
import { Fade } from 'react-reveal'
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { ButtonRound } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

interface DescriptionProps {
  servicesHeading: string;
  servicesParagraph: string;
  servicesImage: any;
  servicesExample1: string;
  servicesExample2: string;
  servicesExample3: string;
  servicesExample4: string;
  servicesExample5: string;
  servicesExample6: string;
  servicesExample7: string;
  servicesExample8: string;
  servicesExample9: string;
  servicesExample10: string;
  servicesExample11: string;
  servicesExample12: string;
}

export const Description: React.FC<DescriptionProps> = ({
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
}) => {
  return (
    <StyledBackground style={{ backgroundImage: `url(${servicesImage})`}}>
      <Container>
        <Spacer size={'lg'} />
        <Flex justify={'center'}>
          <ButtonRound>
            What we do
          </ButtonRound>
        </Flex>
        <Spacer size={'md'} />
        <StyledCard>
          <Spacer size={'sm'} />
          <Fade bottom ssrFadeout>
            <H4 align={'center'} weight={700} uppercase={true}>
              {servicesHeading}
            </H4>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={200} bottom ssrFadeout>
            <P3 align={'center'} weight={200}>
              {servicesParagraph}
            </P3>
          </Fade>
          <Spacer size={'md'} />
          <StyledExamplesContainer>
            <Fade delay={400} bottom ssrFadeout>
              <div id="inner-container">
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample1}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample2}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample3}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample4}
                </P3>
              </div>
            </Fade>
            <Fade delay={600} bottom ssrFadeout>
              <div id="inner-container">
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample5}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample6}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample7}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample8}
                </P3>
              </div>
            </Fade>
            <Fade delay={800} bottom ssrFadeout>
              <div id="inner-container">
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample9}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample10}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample11}
                </P3>
                <Spacer size={'sm'} />
                <P3 align={'center'} uppercase={true} weight={500}>
                  {servicesExample12}
                </P3>
              </div>
            </Fade>
          </StyledExamplesContainer>
          <Spacer size={'sm'} />
        </StyledCard>
        <Spacer size={'md'} />
      </Container>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-position: center;
  background-size: cover;
`;

const StyledCard = styled.div`
  background: ${colors.white};
  padding: ${GU * 10}px;
`;

const StyledExamplesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.lg`
    align-items: center;
    justify-content: center;
    flex-direction: row;
  `}

  div#inner-container {
    width: 100%;
    margin-bottom: ${5 * GU}px;

    ${media.xs`
      margin-bottom: ${6 * GU}px;
    `}

    ${media.lg`
      margin-bottom: 0;
      width: 33.33%;
    `}
  }
`;
