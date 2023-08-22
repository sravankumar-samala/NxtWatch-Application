import React, {useEffect, useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
// eslint-disable-next-line import/no-extraneous-dependencies
// import {useMediaQuery} from 'react-responsive'
import {BiSun} from 'react-icons/bi'
import {IoMdMoon} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {useNxtContext} from '../context/GlobalContext'
import logoUrls from '../data/appLogoUrls'

import {
  HeaderContainer,
  AppLogoContainer,
  HeaderNavContainer,
  ThemeButton,
  ProfileLogo,
  LogoutButton,
  SmallScreenButton,
  StyledPopup,
  PopupContainer,
  PopupButtonsContainer,
  PopupButton,
} from '../styles/HeaderStyles'

function Header({history}) {
  const {isLightTheme, dispatch} = useNxtContext()
  //   const isSmallScreen = window.matchMedia('(max-width: 768px)')
  //   console.log(isSmallScreen.matches)

  // useMediaQuery hook is from external library "react-responsive"
  //   const isSmallScreen = useMediaQuery({query: '(max-width: 768px)'})

  // Event handlers
  const handleNavToggle = () => dispatch({type: 'toggleNavExpanded'})

  const handleThemeToggle = () => dispatch({type: 'toggleTheme'})

  return (
    <HeaderContainer>
      <AppLogo isLightTheme={isLightTheme} />
      <HeaderNavContainer>
        <ThemeButton
          type="button"
          onClick={handleThemeToggle}
          data-testid="theme"
        >
          {isLightTheme ? <IoMdMoon /> : <BiSun className="sun-icon" />}
        </ThemeButton>

        {/* hamburger and image displayed according to screen sizes */}
        {/* {isSmallScreen.matches ? (
          <SmallScreenButton type="button" onClick={handleNavToggle}>
            <GiHamburgerMenu />
          </SmallScreenButton>
        ) : (
          <ProfileLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
            alt="profile"
          />
        )} */}
        <SmallScreenButton type="button" onClick={handleNavToggle}>
          <GiHamburgerMenu />
        </SmallScreenButton>

        <ProfileLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
          alt="profile"
        />

        <StyledPopup
          trigger={<LogoutButton type="button">Logout</LogoutButton>}
          modal
          nested
        >
          {close => <LogoutPopup close={close} history={history} />}
        </StyledPopup>
      </HeaderNavContainer>
    </HeaderContainer>
  )
}

// const TriggerButton = React.forwardRef(() => {
//   const [isSmallScreen, setIsSmallScreen] = useState(false)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 768) // Adjust the breakpoint as needed
//     }

//     handleResize() // Check on initial render

//     window.addEventListener('resize', handleResize)

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, [])

//   return (
//     <>
//       {isSmallScreen ? (
//         <SmallScreenButton type="button">
//           <FiLogOut />
//         </SmallScreenButton>
//       ) : (
//         <LogoutButton type="button">Logout</LogoutButton>
//       )}
//     </>
//   )
// })

function AppLogo({isLightTheme}) {
  return (
    <AppLogoContainer>
      <Link to="/">
        <img
          src={isLightTheme ? logoUrls.light : logoUrls.dark}
          alt="website logo"
        />
      </Link>
    </AppLogoContainer>
  )
}

function LogoutPopup({close, history}) {
  const handleLogout = () => {
    Cookies.remove('jwt_token')
    close()
    history.replace('/login')
  }
  return (
    <PopupContainer>
      <p>Are you sure, you want to logout?</p>
      <PopupButtonsContainer>
        <PopupButton type="button" className="cancel-btn" onClick={close}>
          Cancel
        </PopupButton>
        <PopupButton
          type="button"
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </PopupButton>
      </PopupButtonsContainer>
    </PopupContainer>
  )
}

export default withRouter(Header)
