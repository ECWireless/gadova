import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

import { Button, ButtonRound } from 'components/Buttons'
import { Container, Flex } from 'components/Containers'
import Spacer from 'components/Spacer'
import { H3, H4, P2, P3 } from 'components/Typography'

export const Services: React.FC = () => {
  return (
    <Container>
      <Flex direction={'column'}>
        <Spacer size={'md'} />
        <ButtonRound style={{ margin: '0 auto' }}>What We Do</ButtonRound>
        <Spacer size={'md'} />
        <Fade ssrFadeout>
          <H4 align={'center'} bold={true} uppercase={true}>Services</H4>
        </Fade>
        <Spacer size={'sm'} />
        <Fade ssrFadeout>
          <P3 align={'center'} weight={100}>
            Our goal is to provide products and services that meet or exceed our valued customer’s expectations. 
            Satisfying our customers with a high level of innovation and quality is our primary goal and it is the fundamental 
            element of our business mission. We will do this while providing a safe and rewarding place to work for all of our employees.
          </P3>
        </Fade>
      </Flex>
      <StyledExamplesContainer>
        <Fade bottom ssrFadeout>
          <StyledExampleContainer>
            <Spacer size={'md'} />
            <P2>Electrical Engineering</P2>
            <Spacer size={'sm'} />
            <div id={'example-card'}>
              <ul>
                <li>Embedded System Design</li>
                <li>System-level Design</li>
                <li>High precision lab equipment</li>
                <li>Control System Design</li>
                <li>Control Theory</li>
              </ul>
            </div>
          </StyledExampleContainer>
        </Fade>
        <Fade bottom delay={200} ssrFadeout>
          <StyledExampleContainer>
            <Spacer size={'md'} />
            <P2>Mechanical Engineering</P2>
            <Spacer size={'sm'} />
            <div id={'example-card'}>
              <ul>
                <li>Proof of concept development</li>
                <li>Proof of concept testing</li>
                <li>Prototype development</li>
                <li>Prototype testing</li>
              </ul>
            </div>
          </StyledExampleContainer>
        </Fade>
        <Fade bottom delay={400} ssrFadeout>
          <StyledExampleContainer>
            <Spacer size={'md'} />
            <P2>Industrial Engineering</P2>
            <Spacer size={'sm'} />
            <div id={'example-card'}>
              <ul>
                <li>Concept development</li>
                <li>Human factors and ergonomics</li>
                <li>Rapid prototyping</li>
                <li>3D printing</li>
                <li>Computer rendering</li>
                <li>Computer animation</li>
              </ul>
            </div>
          </StyledExampleContainer>
        </Fade>
      </StyledExamplesContainer>
      <Spacer size={'md'} />
      <StyledDescriptionContainer>
        <StyledPhoto />
        <StyledTextContainer>
          <Fade ssrFadeout>
            <H3 bold={true} uppercase={true}>Engineering</H3>
          </Fade>
          <Spacer size={'xs'} />
          <Fade delay={200} ssrFadeout>
            <H4 bold={true} uppercase={true}>Is the essence of GaDova</H4>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={400} ssrFadeout>
            <P3>Our strict adherence to ISO standards and process enables us to bridge the gap between a terrific idea and a profitable product launch.</P3>
          </Fade>
          <Spacer size={'xs'} />
          <Fade delay={600} ssrFadeout>
            <P3>GoDova’s in-house product development facility allows for the creation of complete turnkey solutions, from design to manufacturing.  The GoDova team has a combined +50 years of NPD and R&D experience.</P3>
          </Fade>
          <Spacer size={'sm'} />
          <Button>Contact Us</Button>
          <Spacer size={'md'} />
        </StyledTextContainer>
      </StyledDescriptionContainer>
      <Spacer size={'md'} />
    </Container>
  )
}

// In the order that they appear
const StyledExampleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  
  div#example-card {
    background: ${colors.blue};
    height: auto;
    width: 100%;

    ${media.sm`
      height: ${GU * 60}px;
      width: ${GU * 80}px;
    `}

    ${media.md`
      width: ${GU * 60}px;
    `}

    ${media.lg`
      height: ${GU * 60}px;
      width: ${GU * 85}px;
    `}

    ul {
      color: ${colors.white};
      font-size: 1.2rem;
      list-style-type: none;
      padding: ${GU * 6}px ${GU * 2}px;
      text-align: center;

      ${media.xs`
        font-size: 1.4rem;
      `}

      ${media.lg`
        font-size: 1.5rem;
      `}

      li {
        margin-bottom: ${GU * 3}px;
      }
    }
  }
`;

const StyledExamplesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.md`
    flex-direction: row;
  `}
`;

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.lg`
    flex-direction: row;
  `}
`;

const StyledPhoto = styled.div`
  background: ${colors.blue};
  height: ${GU * 100}px;
  width: 100%;

  ${media.lg`
    width: 55%;
  `}
`;

const StyledTextContainer = styled.div`
  padding: ${GU * 6}px ${GU * 10}px;
  width: 100%;

  ${media.lg`
    width: 45%;
  `}
`;
