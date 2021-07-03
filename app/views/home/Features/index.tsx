import React from 'react';
import styled, { css } from 'styled-components';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3 } from 'components/Typography';

export const Features: React.FC = () => {
  return (
    <div>
      <FeaturesCard
        heading={`An innovative partner`}
        paragraph={`We pride ourselves on being an innovative partner with our customers. GaDova is a vertically integrated design and engineering firm. We offer complete Electrical, Mechanical, Software, Industrial-Design,and Manufacturing Services.`}
      />
      <FeaturesCard
        heading={`Engineering Experience `}
        paragraph={`GaDova engineers are experienced in medical and non-medical product development practices, quality requirements, regulations, and most importantly, finding solutions`}
      />
      <FeaturesCard
        heading={`Certifications and Designations`}
        paragraph={`Our rigorous observance to International Organizations for Standardization standards ]and process includes: ISO 9001:2015 and ISO 13485:2016 certified`}
      />
    </div>
  )
}

interface FeaturesCardProps {
  heading: string;
  paragraph: string;
}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ heading, paragraph }) => {
  return (
    <StyledBackground>
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
  background: ${colors.blue};
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
