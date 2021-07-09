import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { ButtonRound } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

interface DescriptionProps {
  onScrollToServices: (serviceNumber: number) => void;
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
  onScrollToServices,
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
                <StyledServiceLink onClick={() => onScrollToServices(2)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample1}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(6)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample2}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(9)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample3}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(12)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample4}
                </StyledServiceLink>
              </div>
            </Fade>
            <Fade delay={600} bottom ssrFadeout>
              <div id="inner-container">
                <StyledServiceLink onClick={() => onScrollToServices(3)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample5}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(7)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample6}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(4)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample7}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(10)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample8}
                </StyledServiceLink>
              </div>
            </Fade>
            <Fade delay={800} bottom ssrFadeout>
              <div id="inner-container">
                <StyledServiceLink onClick={() => onScrollToServices(5)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample9}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(8)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample10}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(11)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample11}
                </StyledServiceLink>
                <Spacer size={'sm'} />
                <StyledServiceLink onClick={() => onScrollToServices(1)} align={'center'} uppercase={true} weight={500}>
                  {servicesExample12}
                </StyledServiceLink>
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

const StyledServiceLink = styled(P3)`
  transition: all 0.3s ease;
  &:hover {
    color: ${colors.blue};
    cursor: pointer;
  }
`;
