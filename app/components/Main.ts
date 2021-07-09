import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { GU } from 'components/theme';

export const Main = styled.main`
  margin-top: ${GU * 20}px;

  ${media.xs`
    margin-top: ${GU * 24}px;
  `}
  ${media.lg`
    margin-top: ${GU * 25}px;
  `}
`;
