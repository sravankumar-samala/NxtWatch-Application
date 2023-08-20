import DataFetchLayoutComponent from '../Ui/DataFetchLayoutComponent'
import GamingSuccessView from '../Ui/GamingSuccessView'

export default function Gaming() {
  const url = 'https://apis.ccbp.in/videos/gaming'

  return (
    <DataFetchLayoutComponent
      url={url}
      renderSuccessView={data => <GamingSuccessView videosData={data} />}
      componentName="Gaming"
    />
  )
}
