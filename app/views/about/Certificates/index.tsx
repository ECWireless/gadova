import React from 'react';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P2 } from 'components/Typography';

export const Certificates: React.FC = () => {
  return (
    <Container>
      <Spacer size={'lg'} />
      <H4 align={'center'} weight={700} uppercase={true}>
        Certificates
      </H4>
      <Spacer size={'sm'} />
      <P2 align={'center'}>Our rigorous observance to International Organizations for Standardization standards and process includes: ISO 9001:2015 and ISO 13485:2016 certified</P2>
      <Spacer size={'md'} />
      <StyledCertificatesContainer>
        <StyledCertificate />
        <StyledCertificate />
      </StyledCertificatesContainer>
      <Spacer size={'lg'} />
    </Container>
  )
}

const StyledCertificatesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${GU * 36}px;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;

  ${media.md`
    flex-direction: row;
    height: auto;
    width: ${GU * 210}px;
  `}
`;

const StyledCertificate = styled.div`
  background: grey;
  height: ${GU * 16}px;
  width: ${GU * 60}px;

  ${media.md`
    height: ${GU * 20}px;
    width: ${GU * 100}px;
  `}
`;
