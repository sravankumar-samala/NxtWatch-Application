import {useNxtContext} from '../context/GlobalContext'
import PageLayoutContainer from '../Ui/PageLayoutContainer'
import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'
import FailedView from '../Ui/FailedComponent'
import {Heading, Paragraph} from '../styles/FailedComponentStyles'

export default function LikedVideos() {
  const {likedVideosList} = useNxtContext()

  const NoLikedVideosView = () => (
    <FailedView failureType="noSavedAndLikedVideos">
      <Heading>No liked videos found</Heading>
      <Paragraph>You can save your liked videos while watching them</Paragraph>
    </FailedView>
  )

  return (
    <PageLayoutContainer pageName="Liked Videos">
      {likedVideosList.length ? (
        <TrendingSavedUnifiedSuccessView
          videosData={likedVideosList}
          component="savedVideos"
        />
      ) : (
        <NoLikedVideosView />
      )}
    </PageLayoutContainer>
  )
}
