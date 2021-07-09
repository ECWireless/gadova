import React from 'react';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { ButtonRound } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P3 } from 'components/Typography';

export const Description: React.FC = () => {
  return (
    <StyledBackground>
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
          <H4 align={'center'} weight={700} uppercase={true}>
            Services
          </H4>
          <Spacer size={'sm'} />
          <P3 align={'center'} weight={200}>
            Our goal is to provide products and services that meet or exceed our valued customer’s expectations. 
            Satisfying our customers with a high level of innovation and quality is our primary goal and it is the fundamental 
            element of our business mission. We will do this while providing a safe and rewarding place to work for all of our employees.
          </P3>
          <Spacer size={'md'} />
          <StyledExamplesContainer>
            <div id="inner-container">
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
            </div>
            <div id="inner-container">
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
            </div>
            <div id="inner-container">
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
              <Spacer size={'sm'} />
              <P3 align={'center'} uppercase={true} weight={500}>Electrical Engineering</P3>
            </div>
          </StyledExamplesContainer>
          <Spacer size={'md'} />
        </StyledCard>
        <Spacer size={'md'} />
      </Container>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background: ${colors.blue};
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
