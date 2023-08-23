import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: var(--clr-bg-primary);
  padding-block-end: 2em;
  display: grid;
  grid-template-rows: auto auto 1fr;
  gap: 2em;
  place-items: center;
`

export const PremiumBannerContainer = styled.div`
  width: 100%;
  position: relative;
  background: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  padding: clamp(1em, 3vw, 2em) 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: clamp(1em, 3vw, 2em);

  & p {
    font-size: var(--fs-h3-gaming);
  }

  & img {
    width: min(30vw, 140px);
  }

  & button[data-testid='close'] {
    padding: 0;
    font-size: clamp(2rem, 4vw, 3rem);
    position: absolute;
    top: 10px;
    right: 2vw;
  }

  & button:last-child {
    border: 1px solid black;
    font-size: var(--fs-para2);
    font-weight: bold;
  }
`

export const HomeVideosContainer = styled.div`
  justify-self: stretch;
  padding-inline: 1.5em;
`
export const FormContainer = styled.form`
  border: 1px solid var(--clr-button);
  display: flex;
  align-items: center;
  width: min(50ch, 80%);
  margin-inline: auto;
  margin-top: ${({$isBannerActive}) => ($isBannerActive ? '0' : '2.7em')};
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: -1px 1px 2px var(--clr-button);
  font-size: var(--fs-para2);

  & input {
    flex-grow: 1;
    color: var(--clr-para-accent);
    background-color: transparent;
    border-right: 1px solid var(--clr-bg-secondary);
  }

  & input:focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
  padding: 0.62em 0.7em;
  font-size: var(--fs-h3);
  background-color: var(--clr-button);
  color: var(--clr-h1);
`

export const VideosListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1.2em;

  @media (max-width: 532px) {
    gap: 0.5em;
  }
`

export const VideoItemContainer = styled.li`
  aspect-ratio: 2;
  align-self: stretch;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1em;

  & > div > img {
    aspect-ratio: 16/9;
    width: 100%;
    border-radius: 10.56px;
  }

  @media (max-width: 532px) {
    gap: 0.5em;
  }
`

export const VideoItemContentContainer = styled.div`
  display: flex;
  gap: 0.7em;

  // separate font size for videos item title
  & > div > p:first-child {
    font-size: var(--fs-h3);
  }
`

export const ProfileImageContainer = styled.div`
  aspect-ratio: 1;
  width: 36px;
  height: 36px;
  align-self: start;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
`
