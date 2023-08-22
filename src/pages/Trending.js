import DataFetchLayoutComponent from '../Ui/DataFetchLayoutComponent'
import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'

export default function Trending() {
  const url = 'https://apis.ccbp.in/videos/trending'

  return (
    <DataFetchLayoutComponent
      url={url}
      renderSuccessView={data => (
        <TrendingSavedUnifiedSuccessView
          videosData={data}
          component="trending"
        />
      )}
      componentName="Trending"
    />
  )
}
