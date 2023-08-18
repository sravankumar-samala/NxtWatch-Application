import TrendingGamingUnifiedComponent from '../Ui/TrendingGamingUnifiedComponent'
import GamingSuccessView from '../Ui/GamingSuccessView'

export default function Gaming() {
  const url = 'https://apis.ccbp.in/videos/gaming'

  return (
    <TrendingGamingUnifiedComponent
      url={url}
      renderSuccessView={data => <GamingSuccessView videosData={data} />}
      componentName="Gaming"
    />
  )
}
