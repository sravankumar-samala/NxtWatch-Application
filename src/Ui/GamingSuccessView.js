import {Link} from 'react-router-dom'
import convertJsonToJsObject from '../services/ConvertJsonToJsObject'
import {GamingVideosListContainer, VideosListItem} from '../styles/GamingStyles'

export default function GamingSuccessView({videosData}) {
  const videosList = convertJsonToJsObject(videosData.videos)
  console.log(videosList)

  return (
    <GamingVideosListContainer>
      {videosList.map(eachObj => (
        <VideoItem videoObj={eachObj} key={eachObj.id} />
      ))}
    </GamingVideosListContainer>
  )
}

function VideoItem({videoObj}) {
  const {id, thumbnailUrl, title, viewCount} = videoObj

  return (
    <Link to={`/videos/${id}`}>
      <VideosListItem>
        {/* <div> */}
        <img src={thumbnailUrl} alt="video thumbnail" />
        {/* </div> */}
        <div>
          <p>{title}</p>
          <p>{`${viewCount} Watching Worldwide`}</p>
        </div>
      </VideosListItem>
    </Link>
  )
}
