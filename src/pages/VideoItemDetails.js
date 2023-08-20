import DataFetchLayoutComponent from '../Ui/DataFetchLayoutComponent'
// import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'
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
      videoItemRoute
      componentName="video-item-details"
    />
  )
}
