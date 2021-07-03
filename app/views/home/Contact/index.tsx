import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { media } from 'components/breakpoints';
import { colors } from 'components/theme';

import { Button } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import { Input, TextArea } from 'components/Forms';
import Spacer from 'components/Spacer';
import { H2 } from 'components/Typography';

interface ContactProps {
  contactHeading: string;
  contactBackgroundImage: any;
}

export const Contact: React.FC<ContactProps> = ({
  contactHeading,
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
      <Spacer size={'lg'} />
      <Container>
        <Fade bottom ssrFadeout>
          <H2 color={colors.white} uppercase={true} weight={700}>{contactHeading}</H2>
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
      <Spacer size={'lg'} />
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-position: center;
  background-size: cover;
  position: relative;
`;

const StyledBackgroundOverlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  position: absolute;
  width: 100%;
`;

const StyledInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.lg`
    width: 46%;
  `}
`;
