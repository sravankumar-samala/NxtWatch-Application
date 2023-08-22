import {
  VideoContentDetailsContainer,
  ContentContainerAboveHrLine,
  HorizontalLine,
  ChannelDetailsContent,
  ChannelName,
  Subscribers,
  Description,
} from '../styles/VideoItemDetailsStyles'
import {VideoItemContentContainer} from '../styles/TrendingSavedUnifiedStyles'
import {Title, InnerContentContainer} from '../styles/VideoItemContentStyles'
import ReactionsControlPanel from './ReactionsControlPanel'
import formatVideoUploadedDuration from '../services/FormatVideoUploadDuration'

export default function VideoContentDetails({videoObj}) {
  const {title, description, publishedAt, viewCount, channel} = videoObj
  const {name, profileImageUrl, subscriberCount} = channel

  return (
    <VideoContentDetailsContainer>
      <Title>{title}</Title>
      <ContentContainerAboveHrLine>
        <InnerContentContainer className="flex">
          <p>{`${viewCount} views`}</p>
          <p>{formatVideoUploadedDuration(publishedAt)}</p>
        </InnerContentContainer>
        <ReactionsControlPanel videoObj={videoObj} />
      </ContentContainerAboveHrLine>
      <HorizontalLine />
      <VideoItemContentContainer className="flex">
        <img src={profileImageUrl} alt="channel logo" width="40" height="40" />
        <ChannelDetailsContent>
          <ChannelName>{name}</ChannelName>
          <Subscribers>{`${subscriberCount} subscribers`}</Subscribers>
        </ChannelDetailsContent>
      </VideoItemContentContainer>
      <Description>{description}</Description>
    </VideoContentDetailsContainer>
  )
}
