import styled from 'styled-components'

export const LoginFormPage = styled.div`
  grid-column: 1/-1;
  grid-row: 1/-1;
  display: grid;
  place-items: center;
  padding: 1em;
  background-color: var(--clr-bg-primary);
`

export const FormContainer = styled.div`
  width: min(50ch, 100%);
  display: grid;
  justify-items: center;
  gap: 2em;
  padding: 3em 1em;
  border-radius: var(--border-radius-lg);
  background-color: var(--clr-bg-body);
  ${({lightTheme}) =>
    lightTheme && 'box-shadow: -2px -2px 15px rgba(0, 0, 0, 0.12)'};
  //   border: 1px solid black;
`
export const AppLogoContainer = styled.div`
  width: min(200px, 100%);
  //   margin-inline: auto;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: min(40ch, 100%);
  //   border: 1px solid black;

  & label[for='name'],
  & label[for='password'] {
    font-size: clamp(0.8rem, 2vw, 1.3rem);
    font-weight: bold;
    margin-block: 5px;
    color: var(--clr-login-label);
  }

  & input:not(input[type='checkbox']) {
    margin-block-end: 1em;
    border: 1px solid #00306e;
    border-radius: var(--border-radius-sm);
    background-color: transparent;
    color: var(--clr-para-accent);

    &:focus {
      outline: none;
    }
  }

  & label[for='show-password'] {
    color: var(--clr-login-label);
    margin-bottom: 1.5em;

    & input {
      margin-inline-end: 10px;
    }
  }

  & button {
    border-radius: var(--border-radius-md);
    background-color: #3b82f6;
    color: #f9f9f9;
    font-weight: bold;
  }
`

export const ErrorMessage = styled.p`
  color: #f52c30;
  margin-block: 5px;
`
