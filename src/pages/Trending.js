import TrendingGamingUnifiedComponent from '../Ui/TrendingGamingUnifiedComponent'
import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'

export default function Trending() {
  const url = 'https://apis.ccbp.in/videos/trending'

  return (
    <TrendingGamingUnifiedComponent
      url={url}
      renderSuccessView={data => (
        <TrendingSavedUnifiedSuccessView videosData={data} />
      )}
      componentName="Trending"
    />
  )
}
