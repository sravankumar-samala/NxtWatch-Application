import {Container, InnerContainer} from '../styles/FailedComponentStyles'
import {useNxtContext} from '../context/GlobalContext'

const noDataImage =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

const apiFailedImages = {
  light:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
  dark:
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
}

export default function FailedView({noData, children}) {
  const {isLightTheme} = useNxtContext()

  const themeImage = isLightTheme ? apiFailedImages.light : apiFailedImages.dark

  return (
    <Container>
      <InnerContainer>
        <img
          src={noData ? noDataImage : themeImage}
          alt={noData ? 'not found' : 'failure view'}
        />

        {children}
      </InnerContainer>
    </Container>
  )
}
