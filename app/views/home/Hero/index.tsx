import React from 'react';
import styled from 'styled-components'
import { Fade } from 'react-reveal'

import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

import { Flex } from 'components/Containers'
import Spacer from 'components/Spacer'
import { H3, H4 } from 'components/Typography'

interface IHero {
  heroHeading: string;
  heroSubheading: string;
}

export const Hero: React.FC<IHero> = ({
  heroHeading,
  heroSubheading,
}) => {
  return (
    <StyledHeroContainer>
      <StyledHeroVideo autoPlay loop muted playsInline>
        <source src='/videos/hero.mp4' type="video/mp4" />
      </StyledHeroVideo>
      <StyledInnerContainer>
        <Fade ssrFadeout>
          <StyledTextContainer>
            <H3 align={'center'} bold={true} color={colors.white} uppercase={true}>
              {heroHeading}
            </H3>
            <Spacer size={'sm'} />
            <H4 align={'center'} color={colors.white} uppercase={true}>
              {heroSubheading}
            </H4>
          </StyledTextContainer>
        </Fade>
      </StyledInnerContainer>
    </StyledHeroContainer>
  )
}

const StyledHeroContainer = styled.div`
  width: 100%;
  height: ${GU * 113}px;
  position: relative;
  overflow: hidden;
  margin-top: ${GU * 20}px;

  ${media.xs`
    margin-top: ${GU * 24}px;
  `}
  ${media.sm`
    height: ${GU * 125}px;
  `}
  ${media.md`
    height: ${GU * 150}px;
  `}
  ${media.lg`
    height: ${GU * 175}px;
    margin-top: ${GU * 25}px;
  `}
  ${media.xl`
    height: ${GU * 225}px;
  `}
`

const StyledHeroVideo = styled.video`
  height: 100%;
  width: auto;
  position: absolute;
  top: 0;
  filter: brightness(.8);
  animation-name: fade;
  animation-duration: 2s;
  animation-iteration-count: 1;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  
  ${media.md`
    width: 100%;
    height: auto;
  `}
`

const StyledInnerContainer = styled(Flex)`
  position: relative;
  top: 0;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledTextContainer = styled.div`
  background: rgba(0,0,0,.8);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: ${GU * 30}px auto 0;
  padding: ${GU * 10}px;
  width: ${GU * 80}px;

  ${media.xs`
    background: #000;
    margin: ${GU * 60}px auto 0;
    width: ${GU * 100}px;
  `}
  ${media.sm`
    margin: ${GU * 70}px auto 0;
    width: ${GU * 150}px;
  `}
  ${media.lg`
    margin: ${GU * 104}px auto 0;
  `}
  ${media.xl`
    margin: ${GU * 140}px auto 0;
    width: ${GU * 180}px;
  `}
`