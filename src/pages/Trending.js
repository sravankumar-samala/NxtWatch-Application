import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageLayoutContainer from '../Ui/PageLayoutContainer'
// import {
//   TrendingPageContainer,
//   TrendingPageTitleContainer,
// } from '../styles/TrendingStyle'

export default function Trending() {
  return (
    <AppLayoutContainer data-testid="trending">
      <Header />
      <Sidebar />
      <PageLayoutContainer pageName="Trending" />
    </AppLayoutContainer>
  )
}
