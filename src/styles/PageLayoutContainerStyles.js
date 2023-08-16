import styled from 'styled-components'

export const PageContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
`

export const PageTitleContainer = styled.div`
  --logo-size: clamp(1.3em, 3vw, 2em);
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0.5em 0 0.5em 2em;
  background-color: var(--clr-bg-primary-home);

  & svg {
    width: var(--logo-size);
    height: var(--logo-size);
    color: var(--color-red);
  }

  @media (min-width: 768px) {
    padding-block: 0.8em;
  }
`

export const PageTitle = styled.h1`
  margin-block: 0;
  font-size: clamp(1.7rem, 7vw, 3rem);
  color: var(--clr-h1);
`
