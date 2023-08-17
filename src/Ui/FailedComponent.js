import {Container, InnerContainer} from '../styles/FailedComponentStyles'
import {useNxtContext} from '../context/GlobalContext'
import {
  noDataImage,
  apiFailedImages,
  noSavedVideosImage,
} from '../data/failedComponentData'

export default function FailedView({failureType, children}) {
  const {isLightTheme} = useNxtContext()

  const apiFailedImg = isLightTheme
    ? apiFailedImages.light
    : apiFailedImages.dark

  const getFailureImageData = type => {
    switch (type) {
      case 'apiFailure':
        return [apiFailedImg, 'failure view']
      case 'noSavedVideos':
        return [noSavedVideosImage, 'no saved videos']
      case 'noData':
        return [noDataImage, 'not found']
      default:
        return null
    }
  }

  const [imageSrc, altMsg] = getFailureImageData(failureType)

  return (
    <Container>
      <InnerContainer>
        <img src={imageSrc} alt={altMsg} />
        {children}
      </InnerContainer>
    </Container>
  )
}
