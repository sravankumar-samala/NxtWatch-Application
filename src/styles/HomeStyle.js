import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: var(--clr-bg-primary-home);
  padding-block: 2em;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2em;
  place-items: center;
  padding: 1.5em;
`

export const HomeVideosContainer = styled.div`
  justify-self: stretch;
`
export const FormContainer = styled.form`
  border: 1px solid var(--clr-button);
  display: flex;
  align-items: center;
  width: min(50ch, 100%);
  margin: 0 auto;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: -1px 1px 2px var(--clr-button);

  & input {
    flex-grow: 1;
    color: var(--clr-para-accent);
    // background-color: var(--clr-bg-input);
    background-color: transparent;
    border-right: 1px solid var(--clr-bg-secondary);
  }

  & input:focus {
    outline: none;
  }
`

export const SearchButton = styled.button`
  padding: 0.5em 0.7em;
  font-size: 2rem;
  background-color: var(--clr-button);
  color: var(--clr-h1);
`

export const VideosListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 1.2em;
`

export const VideoItemContainer = styled.li`
  //   border: 1px solid black;
  aspect-ratio: 2/2.2;
  align-self: stretch;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1em;

  & > div > img {
    aspect-ratio: 16/9;
    width: 100%;
    border-radius: 10.56px;
  }
`

export const VideoItemContent = styled.div`
  display: flex;
  gap: 0.7em;
  box-shadow: var(--shadow-md);

  & p {
    margin-block: 5px;
  }
`

export const ProfileImageContainer = styled.div`
  aspect-ratio: 1;
  width: 40px;
  height: 40px;
  align-self: start;
  border-radius: 50%;
  box-shadow: var(--shadow-md);
`

export const InnerContentContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  color: var(--clr-para);
  margin-block-end: 10px;
`
export const Title = styled.p`
  font-size: clamp(0.9rem, 3vw, 1.7rem);
  color: var(--clr-para-accent);
  font-weight: 600;

  //below code restricts title to occupy max 2 lines
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ChannelName = styled.p`
  color: var(--clr-para);
`
