import styled from 'styled-components'

export const Container = styled.div`
  padding-block: 2em;
  display: grid;
  place-items: center;
  background-color: var(--clr-bg-secondary);
  //   min-height: 100vh;
`
export const InnerContainer = styled.div`
  display: grid;
  place-items: center;
  max-width: 500px;
  img {
    width: 400px;
  }
`
export const Heading = styled.h1`
  color: var(--clr-h1);
`

export const Paragraph = styled.p`
  color: var(--clr-para);
  font-size: 1.6rem;
  margin-block: 6px;
`
export const Button = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  font-size: 1.6rem;
  border-radius: var(--border-radius-sm);
  margin-top: 1em;
`
