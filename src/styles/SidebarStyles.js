import styled from 'styled-components'

export const Navigation = styled.nav`
  background-color: var(--clr-bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  max-height: 90vh;
  padding-top: 3em;
  position: sticky;
  top: calc(50px + 1em);
  transition: all 0.3s ease-in-out;
  overflow: auto;

  @media (max-width: 767px) {
    background-color: var(--clr-bg-secondary);

    padding-top: 70px;
    width: min(25ch, 90%);
    min-height: 100vh;
    position: ${({navExpanded}) => (navExpanded ? 'fixed' : 'absolute')};
    top: 0;
    right: 0;
    ${({navExpanded}) =>
      navExpanded ? 'box-shadow: -5px 0 20px 5px #0000004d' : ''};

    /* transformations effects the sticky behaviour of header. */
    /*transform: ${({navExpanded}) =>
      navExpanded ? 'translateX(0)' : 'translateX(100%)'};*/

    /* Same transformation effect can also achieved without effecting header's sticky behaviour. */
    width: ${({navExpanded}) => (navExpanded ? 'min(25ch, 90%)' : '0')};
  }
`

export const NavLinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  & a {
    color: var(--clr-h1);
    padding: 0.3em 1em;
    font-size: clamp(1.6rem, 2vw, 1.8rem);
    font-weight: 500;
  }

  & .activeNavLink {
    font-weight: 600;
    background-color: var(--clr-bg-nav-item);
  }

  & .activeNavLink svg {
    color: #f52c30;
  }
  & li {
    display: flex;
    align-items: center;
    gap: 1em;
  }
`

export const NavFooter = styled.div`
  display: grid;
  gap: 1em;
  padding: 1em;

  & h3,
  p {
    color: var(--clr-h1);
  }

  & p {
    font-size: clamp(1.3rem, 2vw, 1.7rem);
    font-weight: bold;
    color: var(--clr-para-accent);
  }
`

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`

export const SocialButton = styled.button`
  as: 'a';
  background-color: transparent;
  padding: 0;

  & img {
    aspect-ratio: 1;
    width: 30px;

    @media (max-width: 768px) {
      width: 20px;
    }
  }
`