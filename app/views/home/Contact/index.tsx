import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal';
import { media } from 'components/breakpoints';
import { colors } from 'components/theme';

import { Button } from 'components/Buttons';
import { Container, Flex } from 'components/Containers';
import { Input, TextArea } from 'components/Forms';
import Snackbar from 'components/Snackbar';
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
  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [snackbar, setSnackbar] = React.useState(false)
  
  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus(prev => ({
        ...prev,
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      }))
      setInputs(prev => ({
        ...prev,
        name: '',
        email: '',
        subject: '',
        message: '',
      }))
      setSnackbar(true)
    } else {
      setStatus(prev => ({
        ...prev,
        info: { error: true, msg: msg }
      }))
      setSnackbar(true)
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus(prev => ({
      ...prev,
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    }))
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  const onCloseSnackbar = () => {
    setSnackbar(false)
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
        <form onSubmit={handleOnSubmit}>
          <Flex respond justify={'space-between'}>
            <StyledInputsContainer>
              <Input
                id={'name'}
                required
                type="text"
                placeholder={'name:'}
                onChange={handleOnChange}
                value={inputs.name}
              />
              <Spacer size={'md'} />
              <Input
                id={'email'}
                required
                type="email"
                placeholder={'email:'}
                onChange={handleOnChange}
                value={inputs.email}
              />
              <Spacer size={'md'} />
              <Input
                id={'subject'}
                required type="text"
                placeholder={'subject:'}
                onChange={handleOnChange}
                value={inputs.subject}
              />
            </StyledInputsContainer>
            <StyledInputsContainer>
              <TextArea
                id={'message'}
                required
                placeholder={'project description:'}
                onChange={handleOnChange}
                value={inputs.message}
              />
            </StyledInputsContainer>
          </Flex>
          <Spacer size={'md'} />
          <Flex justify={'flex-end'}>
            <Button color={colors.white} uppercase={true} weight={600}>Submit</Button>
          </Flex>
        </form>
      </Container>
      <Spacer size={'lg'} />
      { snackbar && <Snackbar success={!status.info.error} onCloseSnackbar={onCloseSnackbar} /> }
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
