import React from 'react';
import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

import { Container, Flex } from 'components/Containers';
import Spacer from 'components/Spacer';
import { H3 } from 'components/Typography';

export const Services: React.FC = () => {
  return (
    <StyledBackground>
      <Spacer size={'lg'} />
      <Container>
        <StyledTextContainer>
          <Spacer size={'md'} />
          <H3 align={'center'} color={colors.blueLight} uppercase={true} weight={600}>
            Services Include:
          </H3>
          <Spacer size={'sm'} />
          <StyledList>
            <li>Five axis CNC machine</li>
            <li>3D Mold Design and manufacturing</li>
            <li>200-ton Injection molding capabilities</li>
            <li>Surface mounted technology</li>
            <li>semiautomated through-hole technology</li>
            <li>Assembly and shipping</li>
          </StyledList>
          <Spacer size={'md'} />
        </StyledTextContainer>
      </Container>
      <Spacer size={'lg'} />
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background: ${colors.blue};
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
