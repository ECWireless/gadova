import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { media } from 'components/breakpoints';
import { colors } from 'components/theme';

import { Button } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import { Input, TextArea } from 'components/Forms';
import Spacer from 'components/Spacer';
import { H2, P1 } from 'components/Typography';

interface ContactProps {
  contactHeading: string;
  contactParagraph: string;
  contactBackgroundImage: any;
}

export const Contact: React.FC<ContactProps> = ({
  contactHeading,
  contactParagraph,
  contactBackgroundImage,
}) => {
  const onSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  }

  return (
    <StyledBackground style={{ backgroundImage: `url(${contactBackgroundImage}` }}>
      <StyledBackgroundOverlay />
      <Spacer size={'lg'} />
      <Container>
        <StyledArrowContainer>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 89 147.176">
            <path id="Path_8" data-name="Path 8" d="M0,0H81.094V26.818H0Z" transform="translate(57.909) rotate(90)" fill="#fccc49"/>
            <path id="Polygon_2" data-name="Polygon 2" d="M44.5,0,89,76H0Z" transform="translate(89 147.176) rotate(180)" fill="#fccc49"/>
          </svg>
        </StyledArrowContainer>
        <Spacer size={'md'} />
        <Fade bottom ssrFadeout>
          <H2 color={colors.white} uppercase={true} weight={700}>{contactHeading}</H2>
        </Fade>
        <Spacer size={'sm'} />
        <Fade bottom ssrFadeout>
          <P1 color={colors.white}>{contactParagraph}</P1>
        </Fade>
        <Spacer size={'md'} />
        <form onSubmit={onSubmit}>
          <Flex respond justify={'space-between'}>
            <StyledInputsContainer>
              <Input required type="text" placeholder={'name:'} />
              <Spacer size={'md'} />
              <Input required type="email" placeholder={'email:'} />
              <Spacer size={'md'} />
              <Input required type="text" placeholder={'subject:'} />
            </StyledInputsContainer>
            <StyledInputsContainer>
              <TextArea required placeholder={'project description:'} />
            </StyledInputsContainer>
          </Flex>
          <Spacer size={'md'} />
          <Flex justify={'flex-end'}>
            <Button color={colors.white} uppercase={true} weight={600}>Submit</Button>
          </Flex>
        </form>
      </Container>
      <Spacer size={'lg'} />
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-position:  bottom center;
  background-size: cover;
  position: relative;
`;

const StyledBackgroundOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledArrowContainer = styled.div`
  width: 45px;
  height: 75px;

  ${media.lg`
    width: 90px;
    height: 150px;
  `}
`;

const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.lg`
    width: 46%;
  `}
`;
