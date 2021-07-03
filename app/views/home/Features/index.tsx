import React from 'react';
import styled, { css } from 'styled-components';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3 } from 'components/Typography';

interface FeaturesProps {
  features1Heading: string;
  features1Paragraph: string;
  features1Image: any;
  features2Heading: string;
  features2Paragraph: string;
  features2Image: any;
  features3Heading: string;
  features3Paragraph: string;
  features3Image: any;
}

export const Features: React.FC<FeaturesProps> = ({
  features1Heading,
  features1Paragraph,
  features1Image,
  features2Heading,
  features2Paragraph,
  features2Image,
  features3Heading,
  features3Paragraph,
  features3Image,
}) => {
  return (
    <div>
      <FeaturesCard
        heading={features1Heading}
        paragraph={features1Paragraph}
        image={features1Image}
      />
      <FeaturesCard
        heading={features2Heading}
        paragraph={features2Paragraph}
        image={features2Image}
      />
      <FeaturesCard
        heading={features3Heading}
        paragraph={features3Paragraph}
        image={features3Image}
      />
    </div>
  )
}

interface FeaturesCardProps {
  heading: string;
  paragraph: string;
  image: any;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ heading, paragraph, image }) => {
  return (
    <StyledBackground style={{ backgroundImage: `url(${image})`}}>
      <Spacer size="md" />
      <Spacer size="md" />
      <Container>
        <Fade bottom ssrFadeout>
          <StyledCard>
            <H3 align={'center'} color={colors.blueLight} uppercase={true} weight={500}>{heading}</H3>
            <Spacer size="sm" />
            <StyledText align={'center'} weight={300}>{paragraph}</StyledText>
          </StyledCard>
        </Fade>
      </Container>
      <Spacer size="md" />
      <Spacer size="md" />
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-position: center;
  background-size: cover;
`;

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  margin: 0 auto;
  padding: ${GU * 10}px  ${GU * 5}px;
  width: 90%;

  ${media.xs`
    padding: ${GU * 14}px ${GU * 8}px;
  `}
  ${media.sm`
    padding: ${GU * 14}px ${GU * 10}px;
  `}
`;

interface ITypograhpy {
	align?: 'left' | 'center' | 'right';
	bold?: boolean;
	uppercase?: boolean;
	weight?: number;
}

export const StyledText = styled.p<ITypograhpy>`
	letter-spacing: 0.2rem;
	font-size: 1.2rem;
	font-family: 'Nunito Sans', sans-serif;
	font-weight: light;
  line-height: 1.5;
	padding: 0;
	margin: 0;
	${media.xs`
		font-size: 1.4rem;
	`}
	${media.sm`
		font-size: 1.6rem;
	`}
	${media.md`
		font-size: 1.8rem;
	`}
	${media.lg`
		font-size: 2rem;
	`}
	${media.xl`
		font-size: 2.8rem;
	`}
	${props => props.uppercase && css`
		text-transform: uppercase;
	`}
	${props => props.align && css`
		text-align: ${props.align};
	`}
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => props.weight && css`
		font-weight: ${props.weight};
	`}
	${props => css`
		color: ${props.color}
	`}
`
