import React from 'react';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { Container } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3 } from 'components/Typography';

interface ServicesProps {
  aboutServicesHeading: string;
  aboutServicesItem1: string;
  aboutServicesItem2: string;
  aboutServicesItem3: string;
  aboutServicesItem4: string;
  aboutServicesItem5: string;
  aboutServicesItem6: string;
  aboutServicesItem7: string;
  aboutServicesImage: any;
}

export const Services: React.FC<ServicesProps> = ({
  aboutServicesHeading,
  aboutServicesItem1,
  aboutServicesItem2,
  aboutServicesItem3,
  aboutServicesItem4,
  aboutServicesItem5,
  aboutServicesItem6,
  aboutServicesItem7,
  aboutServicesImage,
}) => {
  return (
    <StyledBackground style={{ backgroundImage: `url(${aboutServicesImage})`}}>
      <Spacer size={'lg'} />
      <Container>
        <StyledTextContainer>
          <Spacer size={'md'} />
          <H3 align={'center'} color={colors.blueLight} uppercase={true} weight={600}>
            {aboutServicesHeading}
          </H3>
          <Spacer size={'sm'} />
          <StyledList>
            <li>{aboutServicesItem1}</li>
            <li>{aboutServicesItem2}</li>
            <li>{aboutServicesItem3}</li>
            <li>{aboutServicesItem4}</li>
            <li>{aboutServicesItem5}</li>
            <li>{aboutServicesItem6}</li>
            <li>{aboutServicesItem7}</li>
          </StyledList>
          <Spacer size={'md'} />
        </StyledTextContainer>
      </Container>
      <Spacer size={'lg'} />
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-position: center;
  background-size: cover;
  width: 100%;
`;

const StyledTextContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 0 ${GU * 4}px;
  width: 100%;
`;

const StyledList = styled.ul`
  list-style: none;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0;
  text-align: center;
  text-transform: uppercase;

  ${media.xs`
    font-size: 1.6rem;
  `}

  li {
    margin-bottom: ${GU * 4}px;
  }
`;
