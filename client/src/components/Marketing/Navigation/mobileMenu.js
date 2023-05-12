import React from 'react';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import { colors, breakpoints } from '../../../styles/theme';
import SmallLogo from '../../../components/Common/svgs/SmallLogo';

const menuUp = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }`;

const Wrapper = styled.div`
  animation: ${menuUp} 0.3s ease-out forwards;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1.25rem 1.25rem 1.5rem;
  background-color: ${colors.white};
  border-color: ${colors.gray50};

  transform-origin: top right;
  @media (min-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
`;

const StyledSmallLogo = styled(SmallLogo)`
  margin-left: 16px;
`;

const CloseButtonWrapper = styled.div`
  margin-right: -0.5rem;
`;

const CloseButton = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: ${colors.gray400};
  &:hover {
    color: ${colors.gray500};
    background-color: ${colors.gray100};
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    color: ${colors.gray500};
    background-color: ${colors.gray100};
  }
`;

const CloseImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  grid-gap: 1.75rem;
  gap: 1.75rem;
  margin-left: 1rem;
`;

const Item = styled.div`
  margin: -0.75rem;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${colors.gray50};
  }
`;

const MenuImageWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${colors.indigo500};
  color: ${colors.white};
`;

const MenuImg = styled.img`
  height: 2rem;
  width: 2rem;
  color: white;
  margin-right: 0 !important;
`;

const Title = styled.div`
  padding-left: 1rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  color: ${colors.gray900};
`;

const ButtonWrapper1 = styled.div`
  margin-top: 1.5rem;
  padding: 0 1.25rem 1.5rem;
`;

const ButtonWrapper2 = styled.div`
  margin-top: 1.5rem;
`;

const Button = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-width: 1px;
  border-color: transparent;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  color: ${colors.white};
  background-color: ${colors.indigo600};
  &:hover {
    background-color: ${colors.indigo500};
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: ${colors.indigo700};
    box-shadow: 0 0 0 3px rgba(180, 198, 252, 0.45);
  }
  &:active {
    background-color: ${colors.indigo700};
  }
`;
const StyledLink = styled.a`
  display: block;
  color: #5e6367;
  font-size: 12px;
  background-color: transparent !important;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 24px;
  text-transform: uppercase;
  font-family: var(--bs-font-sans-serif);
  padding-left: 15px;
  padding-right: 15px;
 

  &:hover {
    &::before {
      visibility: visible !important;
      width: 100%;
      color: #2f55d4 !important;
    }
  }
`;

const MobileMenu = ({ mobileMenuHandler }) => (
  <Wrapper>
    <Header>
      <StyledSmallLogo height={34} width={40} />
      <CloseButtonWrapper>
        <CloseButton onClick={mobileMenuHandler} type="button">
          <CloseImage src="/icons/close.svg" alt="menu icon" />
        </CloseButton>
      </CloseButtonWrapper>
    </Header>
    <div>
      <Nav>
          <Link href="#home" passHref>
            <StyledLink>HOME</StyledLink>
          </Link>
          <Link href="#howitworks" passHref>
            <StyledLink>HOW IT WORKS</StyledLink>
          </Link>
          <Link href="#features" passHref>
            <StyledLink>FEATURES</StyledLink>
          </Link>
          <Link href="#pricing" passHref>
            <StyledLink>PRICING</StyledLink>
          </Link>
          <Link href="#faq" passHref>
            <StyledLink>FAQ</StyledLink>
          </Link>
          <Link href="#contact" passHref>
            <StyledLink>CONTACT</StyledLink>
          </Link>
          <Link href="#signup" passHref>
            <StyledLink>SIGN UP</StyledLink>
          </Link>
      </Nav>
    </div>
  </Wrapper>
);

export default MobileMenu;
