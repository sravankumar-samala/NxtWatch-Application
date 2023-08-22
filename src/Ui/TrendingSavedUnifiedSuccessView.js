import {Link} from 'react-router-dom'
import ConvertJsonToJsObject from '../services/ConvertJsonToJsObject'
import VideoItemContent from './VideoItemContent' // for common content pattern in videoItem cards
import {
  VideosListContainer,
  VideoListItem,
  ThumbnailImage,
  VideoItemContentContainer,
  ProfileImage,
} from '../styles/TrendingSavedUnifiedStyles'

export default function TrendingSavedUnifiedSuccessView({
  videosData,
  component,
}) {
  const videosList =
    component === 'trending'
      ? ConvertJsonToJsObject(videosData.videos)
      : videosData
  //   console.log(videosList)

  return (
    <VideosListContainer>
      {videosList?.map(videoObj => (
        <VideoItem videoItemObj={videoObj} key={videoObj.id} />
      ))}
    </VideosListContainer>
  )
}

function VideoItem({videoItemObj}) {
  const {id, thumbnailUrl, channel} = videoItemObj
  const {profileImageUrl} = channel

  return (
    <Link to={`/videos/${id}`}>
      <VideoListItem>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoItemContentContainer>
          <ProfileImage src={profileImageUrl} alt="profile" />
          <VideoItemContent videoItemObj={videoItemObj} />
        </VideoItemContentContainer>
      </VideoListItem>
    </Link>
  )
}
