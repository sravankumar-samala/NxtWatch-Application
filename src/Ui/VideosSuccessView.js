import {HomeVideosContainer, VideosListContainer} from '../styles/HomeStyle'
import VideoItem from './videoItem'

function updateVideosList(videos) {
  const updatedList = videos.map(obj => ({
    id: obj.id,
    thumbnailUrl: obj.thumbnail_url,
    publishedAt: obj.published_at,
    viewCount: obj.view_count,
    title: obj.title,
    name: obj.channel.name,
    profileImageUrl: obj.channel.profile_image_url,
  }))

  return updatedList
}

export default function VideosSuccessView({data, apiStatus}) {
  //   console.log(data)

  const videosList =
    apiStatus === 'Success' ? updateVideosList(data.videos) : []

  return (
    <HomeVideosContainer>
      {videosList.length === 0 ? (
        <h1>No Data</h1>
      ) : (
        <VideosListContainer>
          {videosList.map(each => (
            <VideoItem key={each.id} videoItemObj={each} />
          ))}
        </VideosListContainer>
      )}
    </HomeVideosContainer>
  )
}
