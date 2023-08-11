import {useRef, useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useNxtContext} from '../context/GlobalContext'
import {
  LoginFormPage,
  FormContainer,
  AppLogoContainer,
  LoginForm,
  ErrorMessage,
} from '../styles/LoginStyle'
import logoUrls from '../data/appLogoUrls'

// const user = {
//   name: 'rahul',
//   password: 'rahul@2021',
// }

export default function Login(props) {
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const userNameRef = useRef()
  const passwordRef = useRef()
  const {isLightTheme} = useNxtContext()
  const jwtToken = Cookies.get('jwt_token')

  const handleShowPassword = () => setShowPassword(prev => !prev)

  const onSuccess = token => {
    const {history} = props

    Cookies.set('jwt_token', token, {
      expires: 30,
    })
    history.replace('/')
  }

  const onSubmitForm = async e => {
    e.preventDefault()

    let data
    const username = userNameRef.current.value
    const password = passwordRef.current.value

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const resp = await fetch(url, options)
      data = await resp.json()
      if (!resp.ok) throw new Error(data.error_msg)
      onSuccess(data.jwt_token)
      setErrorMsg(null)
    } catch (error) {
      setErrorMsg(error.message)
      console.log(error.message)
    }

    // console.log(username, password)
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <LoginFormPage>
      <FormContainer lightTheme={isLightTheme}>
        <AppLogoContainer>
          <img
            src={isLightTheme ? logoUrls.light : logoUrls.dark}
            alt="app logo"
          />
        </AppLogoContainer>

        <LoginForm onSubmit={onSubmitForm}>
          <label htmlFor="name">USERNAME</label>
          <input
            ref={userNameRef}
            type="text"
            id="name"
            placeholder="Enter Name"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            ref={passwordRef}
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter Password"
          />

          <label htmlFor="show-password">
            <input
              type="checkbox"
              id="show-password"
              onChange={handleShowPassword}
            />
            Show Password
          </label>
          <button type="submit" className="btn button">
            Submit
          </button>
          {errorMsg && <ErrorMessage>*{errorMsg}</ErrorMessage>}
        </LoginForm>
      </FormContainer>
    </LoginFormPage>
  )
}
