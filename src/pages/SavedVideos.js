import {useNxtContext} from '../context/GlobalContext'
import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageLayoutContainer from '../Ui/PageLayoutContainer'
import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'
import FailedView from '../Ui/FailedComponent'
import {Heading, Paragraph} from '../styles/FailedComponentStyles'

export default function SavedVideos() {
  const {savedVideosList} = useNxtContext()

  const NoSavedVideosView = () => (
    <FailedView failureType="noSavedVideos">
      <Heading>No saved videos found</Heading>
      <Paragraph>You can save your videos while watching them</Paragraph>
    </FailedView>
  )

  return (
    <AppLayoutContainer data-testid="saved-videos">
      <Header />
      <Sidebar />
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
    </AppLayoutContainer>
  )
}
