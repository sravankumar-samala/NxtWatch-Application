import styled from 'styled-components'

export const VideosListContainer = styled.ul`
  display: grid;
  gap: 0.5em;

  @media (min-width: 576px) {
    gap: 1.5em;
    padding: 1em 2em;
  }
`

export const VideoListItem = styled.li`
  display: grid;
  gap: 0.7em;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
  }
`

export const VideoItemContentContainer = styled.div`
  display: flex;
  gap: 1em;
  align-items: flex-start;

  // separate font size for trending and saved videos title
  & > div > p:first-child {
    font-size: var(--fs-h3-gaming);
  }

  @media (max-width: 575px) {
    padding-inline: 1em;
  }
`

export const ThumbnailImage = styled.img`
  @media (min-width: 576px) {
    border-radius: 7px;
  }
`

export const ProfileImage = styled.img`
  --profile-img-size: 36px;
  border-radius: 50%;
  width: var(--profile-img-size);

  @media (min-width: 576px) {
    display: none;
  }
`
