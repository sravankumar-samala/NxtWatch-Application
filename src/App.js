import {Switch, Route, Redirect, useLocation} from 'react-router-dom'
import {NxtWatchContextProvider} from './context/GlobalContext'
import GlobalStyle, {AppLayoutContainer} from './styles/GlobalStyles'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Gaming from './pages/Gaming'
import SavedVideos from './pages/SavedVideos'
import LikedVideos from './pages/LikedVideos'
import VideoItemDetails from './pages/VideoItemDetails'
import NotFound from './pages/NotFound'
import './App.css'

export default function App() {
  const location = useLocation()
  const isLoginRoute = location.pathname === '/login'

  return (
    <NxtWatchContextProvider>
      <GlobalStyle />
      <AppLayoutContainer>
        {!isLoginRoute && (
          <>
            <Header />
            <Sidebar />
          </>
        )}

        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/liked-videos" component={LikedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppLayoutContainer>
    </NxtWatchContextProvider>
  )
}
