import styled from 'styled-components'
import { media } from 'components/breakpoints'
import { colors, GU } from 'components/theme'

import { Container } from 'components/Containers'
import Spacer from 'components/Spacer'
import { P4 } from 'components/Typography'

const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <StyledBackground />
      <Spacer size={'lg'} />
      <Container>
        <StyledInnerContainer>
          <StyledTextContainerLeft>
            <P4 color={colors.white} uppercase={true}>1822 Main Street</P4>
            <Spacer size={'xs'} />
            <P4 color={colors.white} uppercase={true}>Sharpsburg, PA 15215</P4>
          </StyledTextContainerLeft>
          <StyledLogo src="/gadova_logo_lg.png" alt="Coratives Logo"/>
          <StyledTextContainerRight>
            <StyledLink href="tel:+412-781-1666">
              <P4 uppercase={true}>412-781-1666</P4>
            </StyledLink>
            <Spacer size={'xs'} />
            <StyledLink href="mailto:info@gadova.com">
              <P4>gbeluk@gadova.com</P4>
            </StyledLink>
          </StyledTextContainerRight>
        </StyledInnerContainer>
      </Container>
      <Spacer size={'lg'} />
    </StyledFooterContainer>
  )
}

export default Footer;

const StyledBackground = styled.div`
  background: #9B9B9B;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const StyledFooterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInnerContainer = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  display: flex;

  ${media.md`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  `}
`

const StyledLogo = styled.img`
  height: ${GU * 24}px;
  margin-bottom: ${GU * 10}px;
  margin-top: ${GU * 10}px;
  width: ${GU * 48}px;
  z-index: -1;

  ${media.md`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`

const StyledTextContainerLeft = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${media.md`
    align-items: flex-start;
  `}
`

const StyledTextContainerRight = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${media.md`
    align-items: flex-end;
  `}
`

const StyledLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${colors.orange};
  }
`;
