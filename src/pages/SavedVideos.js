import {useNxtContext} from '../context/GlobalContext'
import PageLayoutContainer from '../Ui/PageLayoutContainer'
import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'
import FailedView from '../Ui/FailedComponent'
import {Heading, Paragraph} from '../styles/FailedComponentStyles'

export default function SavedVideos() {
  const {savedVideosList} = useNxtContext()

  const NoSavedVideosView = () => (
    <FailedView failureType="noSavedAndLikedVideos">
      <Heading>No saved videos found</Heading>
      <Paragraph>You can save your videos while watching them</Paragraph>
    </FailedView>
  )

  return (
    <PageLayoutContainer pageName="Saved Videos">
      {savedVideosList.length ? (
        <TrendingSavedUnifiedSuccessView
          videosData={savedVideosList}
          component="savedVideos"
        />
      ) : (
        <NoSavedVideosView />
      )}
    </PageLayoutContainer>
  )
}
