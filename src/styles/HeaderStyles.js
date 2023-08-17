import styled from 'styled-components'
import Popup from 'reactjs-popup'

export const HeaderContainer = styled.header`
  grid-column: 1/-1;
  background-color: var(--clr-bg-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7em clamp(1em, 2vw, 2em);
  position: sticky;
  top: 0;
  z-index: 999;
`
export const AppLogoContainer = styled.div`
  display: grid;
  place-items: center;
  width: min(120px, 30vw);
`
export const HeaderNavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(1em, 2vw, 2em);

  & img {
    max-width: 25px;
  }
`
export const ThemeButton = styled.button`
  background-color: transparent;
  font-size: 2.5rem;
  padding: 0;

  & .sun-icon {
    color: white;
  }
`
export const SmallScreenButton = styled(ThemeButton)`
  color: var(--clr-para-accent);
  @media (min-width: 768px) {
    display: none;
  }
`

export const ProfileLogo = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

export const LogoutButton = styled.button`
  color: var(--clr-logout-btn);
  background-color: transparent;
  border: 1.5px solid var(--clr-logout-btn);
  border-radius: var(--border-radius-sm);
  padding: 0.2em 1.1em;
  letter-spacing: 0.5px;
  font-weight: 600;

  //   @media (max-width: 767px) {
  //     display: none;
  //   }
`

// popup container styles
export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: #000000bb;
  }
`

export const PopupContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 1.6em;
  padding: 2em;
  background-color: var(--clr-bg-secondary);
  border-radius: var(--border-radius-lg);
  width: min(60vh, 100%);

  & p {
    color: var(--clr-para-accent);
    font-size: 1.7rem;
  }
`
export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`
export const PopupButton = styled.button`
  border-radius: var(--border-radius-sm);
  padding: 0.2em 1.2em;

  &.cancel-btn {
    background-color: transparent;
    color: var(--clr-para-accent);
    border: 1px solid var(--clr-para-accent);
  }

  &.logout-btn {
    background-color: #3b82f6;
    color: #ebebeb;
  }
`
