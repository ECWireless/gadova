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
  onScrollDown: () => void;
}

export const Hero: React.FC<IHero> = ({
  heroHeading,
  heroSubheading,
  onScrollDown,
}) => {
  return (
    <StyledHeroContainer>
      <StyledHeroVideo autoPlay loop muted playsInline>
        <source src='https://arweave.net/S_aDKJUQMkFZT8R-ErRMTbIaKNQQmIZirqxw_xyXljE' type="video/mp4" />
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
        <StyledSVGContainer onClick={onScrollDown}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <path id="Polygon_1" data-name="Polygon 1" d="M149.541,17.155a26,26,0,0,1,35.918,0L288.1,115.2c16.958,16.2,5.493,44.8-17.959,44.8H64.86c-23.452,0-34.917-28.6-17.959-44.8Z" fill="#fff"/>
            <image id="arrow" width="29" height="60" transform="translate(153 41)" xlinkHref="data:image/png;base64,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"/>
          </svg>
        </StyledSVGContainer>
      </StyledInnerContainer>
    </StyledHeroContainer>
  )
}

const StyledHeroContainer = styled.div`
  width: 100%;
  height: ${GU * 113}px;
  position: relative;
  overflow: hidden;

  ${media.sm`
    height: ${GU * 125}px;
  `}
  ${media.md`
    height: ${GU * 150}px;
  `}
  ${media.lg`
    height: ${GU * 175}px;
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
  background: #000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: ${GU * 30}px auto 0;
  padding: ${GU * 10}px;
  width: ${GU * 80}px;

  ${media.xs`
    margin: ${GU * 40}px auto 0;
    width: ${GU * 100}px;
  `}
  ${media.sm`
    width: ${GU * 150}px;
  `}
  ${media.md`
    margin: ${GU * 60}px auto 0;
  `}
  ${media.lg`
    margin: ${GU * 70}px auto 0;
  `}
  ${media.xl`
    margin: ${GU * 100}px auto 0;
    width: ${GU * 180}px;
  `}
`

const StyledSVGContainer = styled.div`
  bottom: -${GU * 14}px;
  height: ${GU * 40}px;
  position: absolute;
  width: ${GU * 84}px;
  transform: scale(.6);

  ${media.xs`
    bottom: -${GU * 14}px;
    transform: scale(.6);
  `}

  ${media.sm`
    bottom: -${GU * 12}px;
    transform: scale(.8);
  `}

  ${media.md`
    transform: scale(1);
    bottom: -${GU * 10}px;
  `}

  &:hover {
    cursor: pointer;
  }
`;
