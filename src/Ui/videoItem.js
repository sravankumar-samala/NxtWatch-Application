import {Link} from 'react-router-dom'
import {
  VideoItemContainer,
  VideoItemContent,
  ProfileImageContainer,
  Title,
  ChannelName,
  InnerContentContainer,
} from '../styles/HomeStyle'

export default function VideoItem({videoItemObj}) {
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    name,
    title,
    publishedAt,
    viewCount,
  } = videoItemObj

  return (
    <Link to={`/videos/${id}`}>
      <VideoItemContainer>
        <div>
          <img src={thumbnailUrl} alt="thumbnail" />
        </div>
        <VideoItemContent>
          <ProfileImageContainer>
            <img src={profileImageUrl} alt="profile" />
          </ProfileImageContainer>
          <div>
            <Title>{title}</Title>
            <ChannelName>{name}</ChannelName>
            <InnerContentContainer>
              <p>{viewCount}</p>
              <p>{publishedAt}</p>
            </InnerContentContainer>
          </div>
        </VideoItemContent>
      </VideoItemContainer>
    </Link>
  )
}
