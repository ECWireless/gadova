import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

import { Button, ButtonRound } from 'components/Buttons'
import { Container, Flex } from 'components/Containers'
import Spacer from 'components/Spacer'
import { H3, H4, P2, P3 } from 'components/Typography'

interface IServices {
  servicesHeading: string;
  servicesParagraph: string;
  servicesExamples1Heading: string;
  servicesExamples1Item1: string;
  servicesExamples1Item2: string;
  servicesExamples1Item3: string;
  servicesExamples1Item4: string;
  servicesExamples1Item5: string;
  servicesExamples1Item6: string;
  servicesExamples2Heading: string;
  servicesExamples2Item1: string;
  servicesExamples2Item2: string;
  servicesExamples2Item3: string;
  servicesExamples2Item4: string;
  servicesExamples2Item5: string;
  servicesExamples2Item6: string;
  servicesExamples3Heading: string;
  servicesExamples3Item1: string;
  servicesExamples3Item2: string;
  servicesExamples3Item3: string;
  servicesExamples3Item4: string;
  servicesExamples3Item5: string;
  servicesExamples3Item6: string;
  servicesDescriptionImage: any;
  servicesDescriptionHeading: string;
  servicesDescriptionSubheading: string;
  servicesDescriptionParagraph1: string;
  servicesDescriptionParagraph2: string;
  onScrollToContact: () => void;
}

export const Services: React.FC<IServices> = ({
  servicesHeading,
  servicesParagraph,
  servicesExamples1Heading,
  servicesExamples1Item1,
  servicesExamples1Item2,
  servicesExamples1Item3,
  servicesExamples1Item4,
  servicesExamples1Item5,
  servicesExamples1Item6,
  servicesExamples2Heading,
  servicesExamples2Item1,
  servicesExamples2Item2,
  servicesExamples2Item3,
  servicesExamples2Item4,
  servicesExamples2Item5,
  servicesExamples2Item6,
  servicesExamples3Heading,
  servicesExamples3Item1,
  servicesExamples3Item2,
  servicesExamples3Item3,
  servicesExamples3Item4,
  servicesExamples3Item5,
  servicesExamples3Item6,
  servicesDescriptionImage,
  servicesDescriptionHeading,
  servicesDescriptionSubheading,
  servicesDescriptionParagraph1,
  servicesDescriptionParagraph2,
  onScrollToContact,
}) => {
  return (
    <Container>
      <Flex direction={'column'}>
        <Spacer size={'md'} />
        <ButtonRound style={{ margin: '0 auto' }}>
          What we do
        </ButtonRound>
        <Spacer size={'md'} />
        <Fade ssrFadeout>
          <H4 align={'center'} bold={true} uppercase={true}>{servicesHeading}</H4>
        </Fade>
        <Spacer size={'sm'} />
        <Fade ssrFadeout>
          <P3 align={'center'} weight={200}>
            {servicesParagraph}
          </P3>
        </Fade>
      </Flex>
      <StyledExamplesContainer>
        <Fade bottom ssrFadeout>
          <StyledExampleContainer>
            <Spacer size={'md'} />
            <P2>
              {servicesExamples1Heading}
            </P2>
            <Spacer size={'sm'} />
            <div id={'example-card'}>
              <ul>
                <li>{servicesExamples1Item1}</li>
                <li>{servicesExamples1Item2}</li>
                <li>{servicesExamples1Item3}</li>
                <li>{servicesExamples1Item4}</li>
                <li>{servicesExamples1Item5}</li>
                <li>{servicesExamples1Item6}</li>
              </ul>
            </div>
          </StyledExampleContainer>
        </Fade>
        <Fade bottom delay={200} ssrFadeout>
          <StyledExampleContainer>
            <Spacer size={'md'} />
            <P2>
              {servicesExamples2Heading}
            </P2>
            <Spacer size={'sm'} />
            <div id={'example-card'}>
              <ul>
                <li>{servicesExamples2Item1}</li>
                <li>{servicesExamples2Item2}</li>
                <li>{servicesExamples2Item3}</li>
                <li>{servicesExamples2Item4}</li>
                <li>{servicesExamples2Item5}</li>
                <li>{servicesExamples2Item6}</li>
              </ul>
            </div>
          </StyledExampleContainer>
        </Fade>
        <Fade bottom delay={400} ssrFadeout>
          <StyledExampleContainer>
            <Spacer size={'md'} />
            <P2>
              {servicesExamples3Heading}
            </P2>
            <Spacer size={'sm'} />
            <div id={'example-card'}>
              <ul>
                <li>{servicesExamples3Item1}</li>
                <li>{servicesExamples3Item2}</li>
                <li>{servicesExamples3Item3}</li>
                <li>{servicesExamples3Item4}</li>
                <li>{servicesExamples3Item5}</li>
                <li>{servicesExamples3Item6}</li>
              </ul>
            </div>
          </StyledExampleContainer>
        </Fade>
      </StyledExamplesContainer>
      <Spacer size={'md'} />
      <StyledDescriptionContainer>
        <StyledPhoto style={{ backgroundImage: `url(${servicesDescriptionImage})` }} />
        <StyledTextContainer>
          <Fade ssrFadeout>
            <H3 bold={true} uppercase={true}>
              {servicesDescriptionHeading}
            </H3>
          </Fade>
          <Spacer size={'xs'} />
          <Fade delay={200} ssrFadeout>
            <H4 bold={true} uppercase={true}>
              {servicesDescriptionSubheading}
            </H4>
          </Fade>
          <Spacer size={'sm'} />
          <Fade delay={400} ssrFadeout>
            <P3>
              {servicesDescriptionParagraph1}
            </P3>
          </Fade>
          <Spacer size={'xs'} />
          <Fade delay={600} ssrFadeout>
            <P3>
              {servicesDescriptionParagraph2}
            </P3>
          </Fade>
          <Spacer size={'sm'} />
          <Button onClick={onScrollToContact}>Contact Us</Button>
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
    margin: 0 auto;
  `}

  ${media.xl`
    flex-direction: row;
    margin: 0 auto;
    width: ${GU * 300}px;
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
  background-position: center;
  background-size: cover;
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
