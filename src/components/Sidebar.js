import {NavLink} from 'react-router-dom'
import {navMenuLinks, socialMediaButtons} from '../data/sidebarData'
import {
  Navigation,
  SidebarOverlay,
  NavLinksContainer,
  NavFooter,
  NavFooterTitle,
  SocialIconsContainer,
  SocialButton,
} from '../styles/SidebarStyles'
import {useNxtContext} from '../context/GlobalContext'

export default function Sidebar() {
  const {isNavExpanded, dispatch} = useNxtContext()

  const handleNavToggle = () => {
    if (window.innerWidth < 768) {
      dispatch({type: 'toggleNavExpanded'})
    }
  }

  // Rendered nav links and social icon buttons from respective lists rather hard coding.
  return (
    <>
      {isNavExpanded && <SidebarOverlay onClick={handleNavToggle} />}
      <Navigation $navExpanded={isNavExpanded}>
        <NavLinksContainer $navExpanded={isNavExpanded}>
          {navMenuLinks.map(link => (
            <NavLink key={link.to} exact to={link.to} onClick={handleNavToggle}>
              <li>
                {link.icon}
                <span>{link.label}</span>
              </li>
            </NavLink>
          ))}
        </NavLinksContainer>

        <NavFooter $navExpanded={isNavExpanded}>
          <NavFooterTitle>CONTACT US</NavFooterTitle>
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
    </>
  )
}
