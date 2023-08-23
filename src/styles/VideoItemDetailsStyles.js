import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {Title} from './VideoItemContentStyles'

export const VideoItemDetailsContainer = styled.div`
  padding-bottom: 2em;
`

export const VideoPlayerContainerWrapper = styled.div`
  background-color: var(--clr-bg-body);
`
export const VideoPlayerContainer = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  max-height: 75dvh;
  margin: 0 auto;
`

export const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  inset: 0;
`

// video item content details styles
export const VideoContentDetailsContainer = styled.div`
  padding: 1em;

  & > p:first-child {
    font-size: var(--fs-h3-gaming);
    margin-block-end: 1em;
  }
`
export const ContentContainerAboveHrLine = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 1em;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1.5em;
`

export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  padding: 0;
  font-size: var(--fs-h3);
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 5px;

  & *:first-child {
    font-size: var(--fs-h3-gaming);
  }
`

export const LikeButton = styled(Button)`
  color: ${({$liked}) =>
    $liked ? 'var(--clr-video-btn-active)' : 'var(--clr-video-btn-in-active)'};
`

export const DisLikeButton = styled(Button)`
  color: ${({$disliked}) =>
    $disliked
      ? 'var(--clr-video-btn-active)'
      : 'var(--clr-video-btn-in-active)'};
`

export const SaveVideoButton = styled(Button)`
  color: ${({$saved}) =>
    $saved ? 'var(--color-red)' : 'var(--clr-video-btn-in-active)'};
`

export const HorizontalLine = styled.hr`
  background-color: var(--clr-bg-nav-item);
  border: none;
  height: 2.5px;
  margin-block: clamp(1.5em, 2vw, 2em);
`

export const ChannelDetailsContent = styled.div``

export const ChannelName = styled(Title)`
  margin-block-end: 5px;
`

export const Subscribers = styled.p`
  color: var(--clr-para);
  font-size: var(--fs-para2);
`

export const Description = styled.p`
  color: var(--clr-para-accent);
  font-size: var(--fs-para1);
  font-weight: normal;
  margin-top: 1.7em;

  @media (min-width: 768px) {
    margin-left: calc(40px + 1em);
  }
`
