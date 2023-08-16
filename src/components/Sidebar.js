// import {useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {navMenuLinks, socialMediaButtons} from '../data/sidebarData'
import {
  Navigation,
  NavLinksContainer,
  NavFooter,
  SocialIconsContainer,
  SocialButton,
} from '../styles/SidebarStyles'
import {useNxtContext} from '../context/GlobalContext'

export default function Sidebar() {
  const location = useLocation()
  const {isNavExpanded, dispatch} = useNxtContext()

  // Function to check if a link is active
  const isLinkActive = linkPath => location.pathname === linkPath

  //   useEffect(() => {
  //     if (isNavExpanded) {
  //       document.body.style.overflow = 'hidden'
  //     } else {
  //       document.body.style.overflow = 'auto'
  //     }

  //     // Cleanup the effect
  //     return () => {
  //       document.body.style.overflow = 'auto'
  //     }
  //   }, [isNavExpanded])

  const handleNavToggle = () => {
    dispatch({type: 'toggleNavExpanded'})
  }

  // Rendered nav links and social icon buttons from respective lists rather hard coding.
  return (
    <Navigation $navExpanded={isNavExpanded}>
      <NavLinksContainer $navExpanded={isNavExpanded}>
        {navMenuLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={isLinkActive(link.to) ? 'activeNavLink' : ''}
            onClick={handleNavToggle}
          >
            <li>
              {link.icon}
              <span>{link.label}</span>
            </li>
          </Link>
        ))}
      </NavLinksContainer>

      <NavFooter $navExpanded={isNavExpanded}>
        <h3>CONTACT US</h3>
        <SocialIconsContainer>
          {socialMediaButtons.map(button => (
            <SocialButton key={button.alt}>
              <img src={button.src} alt={button.alt} />
            </SocialButton>
          ))}
        </SocialIconsContainer>
        <p>Enjoy! Now to see your channels and recommendations!</p>
      </NavFooter>
    </Navigation>
  )
}

// LinksList.map(link => (
//   <NavLink to={link.to} onClick={handleNavToggle}>
//     <li>
//       {link.icon}
//       <span>{link.label}</span>
//     </li>
//   </NavLink>
// ))
