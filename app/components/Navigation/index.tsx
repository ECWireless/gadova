import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { colors, GU } from 'components/theme'
import { media } from 'components/breakpoints'

// Components
import { Container } from 'components/Containers';
import { SandwichMenu } from 'components/SandwichMenu'

export default function Navigation({ setSidebar }) {
  // const [background, setBackground] = React.useState(false)
  const router = useRouter()

  // React.useEffect(() => {
  //   window.addEventListener('scroll', function() {
  //     if (window.pageYOffset === 0) {
  //       setBackground(false)
  //     } else {
  //       setBackground(true)
  //     }
  //   });
  // }, [])
      
  return (
    <StyledHeader>
      <StyledMenuContainer>
        <SandwichMenu setSidebar={setSidebar} />
      </StyledMenuContainer>
      <Container style={{ height: '100%' }}>
        <StyledNav>
          <Link href='/'>
            {router.pathname === '/'
              ? <StyledNavButtonActive>Home</StyledNavButtonActive>
              : <StyledNavButton>Home</StyledNavButton>
            }
          </Link>
          <Link href='/about'>
            {router.pathname === '/about'
              ? <StyledNavButtonActive>About</StyledNavButtonActive>
              : <StyledNavButton>About</StyledNavButton>
            }
          </Link>
          <Link href='/services'>
            {router.pathname === '/services'
              ? <StyledNavButtonActive>Services</StyledNavButtonActive>
              : <StyledNavButton>Services</StyledNavButton>
            }
          </Link>
          <Link href='/contact'>
            {router.pathname === '/contact'
              ? <StyledNavButtonActive>Contact</StyledNavButtonActive>
              : <StyledNavButton>Contact</StyledNavButton>
            }
          </Link>
        </StyledNav>
      </Container>
      <Link passHref href='/'>
        <StyledLogo style={{ backgroundImage: 'url(/gadova_logo_lg.png)'}} />
      </Link>
    </StyledHeader>
  )
}

const StyledMenuContainer = styled.div`
  right: ${GU * 4}px;
  position: fixed;
  top: ${GU * 4}px;
  z-index: 103;

  ${media.xs`
    right: ${GU * 5}px;
    top: ${GU * 5}px;
  `}

  ${media.lg`
    display: none;
  `}
`

const StyledHeader = styled.header`
  background: ${colors.grey};
  box-sizing: border-box;
  height: ${GU * 20}px;
  left: 50%;
  position: fixed;
  top: 0;
  transition: all .3s ease;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;

  ${media.xs`
    height: ${GU * 24}px;
  `}

  ${media.lg`
    height: ${GU * 25}px;
  `}
`

const StyledNav = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: none;
  height: 100%;
  justify-content: space-between;

  ${media.lg`
    display: flex;
    width: ${GU * 95}px;
  `}
`

const StyledNavButton = styled.button`
  background: transparent;
  border: none;
  color: ${colors.white};
  font-size: 1.4rem;
  height: 100%;
  outline: none;
  text-transform: uppercase;
  transition: all .3s ease;
  z-index: 102;

  &:hover {
    color: ${colors.orange};
    cursor: pointer;
  }
`

const StyledNavButtonActive = styled.button`
  background: transparent;
  border: none;
  color: ${colors.orange};
  font-size: 1.4rem;
  height: 100%;
  outline: none;
  text-transform: uppercase;
  transition: all .3s ease;
  z-index: 102;

  &:hover {
    cursor: pointer;
  }
`

const StyledLogo = styled.div`
  background-position: center;
  background-size: cover;
  height: ${GU * 18}px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  top: ${GU * 11}px;
  width: ${GU * 35}px;

  ${media.xs`
    height: ${GU * 25}px;
    width: ${GU * 50}px;
  `}

  ${media.lg`
    height: ${GU * 28}px;
    width: ${GU * 55}px;
  `}

  &:hover {
    cursor: pointer;
  }
`;
