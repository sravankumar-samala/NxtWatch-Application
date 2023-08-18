import styled from 'styled-components'

export const GamingVideosListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: clamp(1.1em, 3vw, 2em);
  padding-inline: clamp(1em, 3vw, 2em);

  @media (min-width: 999px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const VideosListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  & div p:first-child {
    font-size: var(--fs-h3-gaming);
    color: var(--clr-para-accent);
    font-weight: bold;
    // display: none;
  }

  & div p:last-child {
    font-size: var(--fs-para2);
    color: var(--clr-para);
  }
`

// export const Title = styled.p`

// `
