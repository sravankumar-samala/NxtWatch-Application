import {
  ContentContainer,
  Title,
  ChannelName,
  InnerContentContainer,
} from '../styles/VideoItemContentStyles'
import formatVideoUploadedDuration from '../services/FormatVideoUploadDuration'

export default function VideoItemContent({videoItemObj}) {
  const {title, viewCount, publishedAt, channel} = videoItemObj

  return (
    <ContentContainer>
      <Title>{title}</Title>
      <ChannelName>{channel.name}</ChannelName>
      <InnerContentContainer>
        <p>{`${viewCount} views`}</p>
        <p>{formatVideoUploadedDuration(publishedAt)}</p>
      </InnerContentContainer>
    </ContentContainer>
  )
}
