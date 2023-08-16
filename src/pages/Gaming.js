import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import {
//   GamingPageContainer,
//   GamingPageTitleContainer,
// } from '../styles/GamingStyles'
import PageLayoutContainer from '../Ui/PageLayoutContainer'

export default function Gaming() {
  return (
    <AppLayoutContainer data-testid="gaming">
      <Header />
      <Sidebar />
      <PageLayoutContainer pageName="Gaming" />
    </AppLayoutContainer>
  )
}
