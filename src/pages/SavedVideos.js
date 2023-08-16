import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
// import {
//   SavedVideosPageContainer,
//   SavedVideosPageTitleContainer,
// } from '../styles/SavedVideosStyles'
import PageLayoutContainer from '../Ui/PageLayoutContainer'

export default function SavedVideos() {
  return (
    <AppLayoutContainer data-testid="saved-videos">
      <Header />
      <Sidebar />
      <PageLayoutContainer pageName="Saved Videos" />
    </AppLayoutContainer>
  )
}
