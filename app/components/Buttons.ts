import styled, { css } from 'styled-components';
import { media } from 'components/breakpoints';
import { colors, GU, shadows } from 'components/theme';

interface IButton {
  color?: string;
  uppercase?: boolean;
  weight?: number;
}

export const Button = styled.button<IButton>`
  background: ${colors.yellow};
  border: none;
  color: ${colors.black};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  padding: ${GU * 2}px ${GU * 10}px;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    box-shadow: ${shadows.buttonHover};
  }

  ${media.xl`
    font-size: 2.2rem;
    padding: ${GU * 2}px ${GU * 10}px;
  `}

  ${props => props.color && css`
    color: ${props.color};
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}
`;

export const ButtonRound = styled.div<IButton>`
  background: ${colors.yellow};
  border: none;
  border-radius: 17px;
  color: ${colors.black};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 300;
  padding: ${GU * 2}px ${GU * 10}px;
  transition: all 0.3s ease;

  ${media.xl`
    font-size: 2.2rem;
    padding: ${GU * 2}px ${GU * 10}px;
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.weight && css`
    font-weight: ${props.weight};
  `}
`;
