import {HomeVideosContainer, VideosListContainer} from '../styles/HomeStyle'
import VideoItem from './videoItem'
import convertJsonIntoJsObject from '../services/ConvertJsonToJsObject'
import FailedView from './FailedComponent'
import {Heading, Paragraph, Button} from '../styles/FailedComponentStyles'

const updateVideosList = videosList =>
  videosList.map(obj => convertJsonIntoJsObject(obj))

export default function VideosSuccessView({data, apiStatus, retry}) {
  const videosList =
    apiStatus === 'Success' ? updateVideosList(data.videos) : []

  const NoDataView = () => (
    <FailedView failureType="noData">
      <Heading>No Search results found</Heading>
      <Paragraph>Try different key words or remove search filter</Paragraph>
      <Button type="button" onClick={retry}>
        Retry
      </Button>
    </FailedView>
  )

  return (
    <HomeVideosContainer>
      {videosList.length === 0 ? (
        <NoDataView />
      ) : (
        <VideosListContainer>
          {videosList.map(each => (
            <VideoItem key={each.id} videoItemObj={each} />
          ))}
        </VideosListContainer>
      )}
    </HomeVideosContainer>
  )
}
