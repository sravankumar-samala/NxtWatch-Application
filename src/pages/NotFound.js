import {
  Container,
  InnerContainer,
  Heading,
  Paragraph,
} from '../styles/FailedComponentStyles'
import {useNxtContext} from '../context/GlobalContext'

// styles for this component are included in the same file

export default function NotFound() {
  const {isLightTheme} = useNxtContext()

  const imageUrl = isLightTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

  return (
    <Container>
      <InnerContainer isLightTheme={isLightTheme}>
        <img src={imageUrl} alt="not found" />

        <Heading>Page Not Found</Heading>
        <Paragraph>
          We are sorry, the page you requested could not be found.
        </Paragraph>
      </InnerContainer>
    </Container>
  )
}
