import convertJsonToJsObject from '../services/ConvertJsonToJsObject'
import VideoContentDetails from './VideoItemDetailsContent'
import {
  VideoPlayerContainerWrapper,
  VideoPlayerContainer,
  VideoPlayer,
} from '../styles/VideoItemDetailsStyles'

export default function VideoItemDetailsSuccess({videoData}) {
  const videoDetails = convertJsonToJsObject(videoData.video_details)
  console.log(videoDetails)
  const {videoUrl} = videoDetails
  return (
    <>
      <VideoPlayerContainerWrapper>
        <VideoPlayerContainer>
          <VideoPlayer
            url={videoUrl}
            controls
            playing
            width="100%"
            height="100%"
          />
        </VideoPlayerContainer>
      </VideoPlayerContainerWrapper>
      <VideoContentDetails videoObj={videoDetails} />
    </>
  )
}
