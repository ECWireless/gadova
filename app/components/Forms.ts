import styled from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU } from 'components/theme';

export const Input = styled.input`
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  padding: ${GU * 4}px;
  width: 100%;

  &::placeholder {
    color: ${colors.grey};
    text-transform: uppercase;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  height: ${GU * 50}px;
  margin-top: ${GU * 7}px;
  padding: ${GU * 4}px;
  width: 100%;

  ${media.xs`
    margin-top: ${GU * 13}px;
  `}

  ${media.lg`
    height: 100%;
    margin-top: 0;
  `}

  &::placeholder {
    color: ${colors.grey};
    text-transform: uppercase;
  }
`;
