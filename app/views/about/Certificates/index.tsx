import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-reveal'
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H4, P2 } from 'components/Typography';

interface CertificatesProps {
  aboutCertificatesHeading: string;
  aboutCertificatesParagraph: string;
  aboutCertificate1: any;
  aboutCertificate2: any;
}

export const Certificates: React.FC<CertificatesProps> = ({
  aboutCertificatesHeading,
  aboutCertificatesParagraph,
  aboutCertificate1,
  aboutCertificate2,
}) => {
  return (
    <Container>
      <Spacer size={'lg'} />
      <Fade bottom ssrFadeout>
        <H4 align={'center'} weight={700} uppercase={true}>
          {aboutCertificatesHeading}
        </H4>
      </Fade>
      <Spacer size={'sm'} />
      <Fade delay={200} bottom ssrFadeout>
        <P2 align={'center'}>
          {aboutCertificatesParagraph}
        </P2>
      </Fade>
      <Spacer size={'md'} />
      <StyledCertificatesContainer>
        <StyledCertificate style={{ backgroundImage: `url(${aboutCertificate1})`}} />
        <StyledCertificate style={{ backgroundImage: `url(${aboutCertificate2})`}} />
      </StyledCertificatesContainer>
      <Spacer size={'lg'} />
    </Container>
  )
}

const StyledCertificatesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: ${GU * 40}px;
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
  background-position: center;
  background-size: cover;
  height: ${GU * 18}px;
  width: ${GU * 70}px;

  ${media.md`
    height: ${GU * 25}px;
    width: ${GU * 100}px;
  `}
`;
