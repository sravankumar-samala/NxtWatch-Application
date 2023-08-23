import {BiLike, BiDislike} from 'react-icons/bi'
import {MdVideoLibrary} from 'react-icons/md'
import {useNxtContext} from '../context/GlobalContext'
import {
  ButtonsContainer,
  LikeButton,
  DisLikeButton,
  SaveVideoButton,
} from '../styles/VideoItemDetailsStyles'

const checkIsVideoExistsInList = (videosList, video) =>
  videosList.some(eachObj => eachObj.id === video.id)

export default function ReactionsControlPanel({videoObj}) {
  const {
    dispatch,
    savedVideosList,
    likedVideosList,
    dislikedVideosList,
  } = useNxtContext()

  const isVideoSaved = checkIsVideoExistsInList(savedVideosList, videoObj)

  const isVideoLiked = checkIsVideoExistsInList(likedVideosList, videoObj)

  const isVideoDisliked = checkIsVideoExistsInList(dislikedVideosList, videoObj)

  const dispatchData = {
    type: 'updateVideosList',
    video: videoObj,
  }

  const handleSave = () => {
    const actionType = isVideoSaved ? 'remove' : 'add'
    const {type, video} = dispatchData

    dispatch({
      type,
      payload: {
        videosList: 'savedVideosList',
        video,
        actionType,
      },
    })
  }

  const handleLike = () => {
    const actionType = isVideoLiked ? 'remove' : 'add'
    const {type, video} = dispatchData

    dispatch({
      type,
      payload: {
        videosList: 'likedVideosList',
        video,
        actionType,
      },
    })
    if (isVideoDisliked)
      dispatch({
        type,
        payload: {
          videosList: 'dislikedVideosList',
          video,
          actionType: 'remove',
        },
      })
  }

  const handleDislike = () => {
    const actionType = isVideoDisliked ? 'remove' : 'add'
    const {type, video} = dispatchData

    dispatch({
      type,
      payload: {
        videosList: 'dislikedVideosList',
        video,
        actionType,
      },
    })
    if (isVideoLiked)
      dispatch({
        type,
        payload: {
          videosList: 'likedVideosList',
          video,
          actionType: 'remove',
        },
      })
  }

  return (
    <ButtonsContainer>
      <LikeButton type="button" $liked={isVideoLiked} onClick={handleLike}>
        <BiLike />
        Like
      </LikeButton>
      <DisLikeButton
        type="button"
        $disliked={isVideoDisliked}
        onClick={handleDislike}
      >
        <BiDislike />
        Dislike
      </DisLikeButton>
      <SaveVideoButton type="button" $saved={isVideoSaved} onClick={handleSave}>
        <MdVideoLibrary />
        Save
      </SaveVideoButton>
    </ButtonsContainer>
  )
}
