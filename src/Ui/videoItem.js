import {Link} from 'react-router-dom'
import VideoItemContent from './VideoItemContent'
import {
  VideoItemContainer,
  VideoItemContentContainer,
  ProfileImageContainer,
} from '../styles/HomeStyle'

export default function VideoItem({videoItemObj}) {
  //   console.log(videoItemObj)
  const {id, thumbnailUrl, channel} = videoItemObj
  const {profileImageUrl} = channel

  return (
    <Link to={`/videos/${id}`}>
      <VideoItemContainer>
        <div>
          <img src={thumbnailUrl} alt="video thumbnail" />
        </div>
        <VideoItemContentContainer>
          <ProfileImageContainer>
            <img src={profileImageUrl} alt="profile" />
          </ProfileImageContainer>
          <VideoItemContent videoItemObj={videoItemObj} />
        </VideoItemContentContainer>
      </VideoItemContainer>
    </Link>
  )
}
