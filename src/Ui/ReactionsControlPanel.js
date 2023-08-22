import {useState} from 'react'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdVideoLibrary} from 'react-icons/md'
import {useNxtContext} from '../context/GlobalContext'
import {
  ButtonsContainer,
  LikeButton,
  DisLikeButton,
  SaveVideoButton,
} from '../styles/VideoItemDetailsStyles'

export default function ReactionsControlPanel({videoObj}) {
  const [likeVideo, setLikeVideo] = useState(false)
  const [dislikeVideo, setDislikeVideo] = useState(false)
  const {dispatch, savedVideosList} = useNxtContext()

  // checking whether savedVideosList already includes current video
  const isVideoSaved = savedVideosList.some(
    eachObj => eachObj.id === videoObj.id,
  )

  const handleSave = () => {
    if (isVideoSaved) {
      dispatch({type: 'removeFromSavedVideos', payload: videoObj})
    } else dispatch({type: 'addToSavedVideos', payload: videoObj})
  }

  const handleLike = () => {
    setLikeVideo(prev => !prev)
    if (dislikeVideo) setDislikeVideo(prev => !prev)
  }

  const handleDislike = () => {
    setDislikeVideo(prev => !prev)
    if (likeVideo) setLikeVideo(prev => !prev)
  }

  return (
    <ButtonsContainer>
      <LikeButton type="button" $liked={likeVideo} onClick={handleLike}>
        <BiLike />
        Like
      </LikeButton>
      <DisLikeButton
        type="button"
        $disliked={dislikeVideo}
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
