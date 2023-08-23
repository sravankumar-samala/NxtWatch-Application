import DataFetchLayoutComponent from '../Ui/DataFetchLayoutComponent'
import VideoItemDetailsSuccessView from '../Ui/VideoItemDetailsSuccessView'

export default function VideoItemDetails({match}) {
  const {params} = match
  const {id} = params
  const url = `https://apis.ccbp.in/videos/${id}`

  return (
    <DataFetchLayoutComponent
      url={url}
      renderSuccessView={data => (
        <VideoItemDetailsSuccessView videoData={data} />
      )}
      videoItemDetailsRoute
      componentName="video-item-details"
    />
  )
}
