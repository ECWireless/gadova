import React from 'react';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

interface GalleryProps {
  servicesTypeImage1: any;
  servicesTypeImage2: any;
  servicesTypeImage3: any;
  servicesTypeImage4: any;
  servicesTypeImage5: any;
  servicesTypeImage6: any;
}

export const Gallery: React.FC<GalleryProps> = ({
  servicesTypeImage1,
  servicesTypeImage2,
  servicesTypeImage3,
  servicesTypeImage4,
  servicesTypeImage5,
  servicesTypeImage6,
}) => {
  return (
    <div>
      <StyleContainerInner>
        <Fade bottom ssrFadeout>
          <StyledImage style={{ backgroundImage: `url(${servicesTypeImage1})`}} />
        </Fade>
        <Fade bottom ssrFadeout>
          <StyledImage style={{ backgroundImage: `url(${servicesTypeImage2})`}} />
        </Fade>
        <Fade bottom ssrFadeout>
          <StyledImage style={{ backgroundImage: `url(${servicesTypeImage3})`}} />
        </Fade>
      </StyleContainerInner>
      <StyleContainerInner>
        <Fade bottom ssrFadeout>
          <StyledImage style={{ backgroundImage: `url(${servicesTypeImage4})`}} />
        </Fade>
        <Fade bottom ssrFadeout>
          <StyledImage style={{ backgroundImage: `url(${servicesTypeImage5})`}} />
        </Fade>
        <Fade bottom ssrFadeout>
          <StyledImage style={{ backgroundImage: `url(${servicesTypeImage6})`}} />
        </Fade>
      </StyleContainerInner>
    </div>
  )
}

const StyleContainerInner = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lg`
    flex-direction: row;
  `}
`;

const StyledImage = styled.div`
  background-size: cover;
  background-position: center;
  height: ${GU * 50}px;
  width: 100%%;

  ${media.xs`
    height: ${GU * 100}px;
  `}

  ${media.lg`
    width: 33.33%;
  `}
`;
