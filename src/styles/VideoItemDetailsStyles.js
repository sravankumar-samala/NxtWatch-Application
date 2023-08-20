import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoItemDetailsContainer = styled.div``

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
