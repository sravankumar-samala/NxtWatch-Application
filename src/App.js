// import {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
// import {useNxtContext} from './context/GlobalContext'
import {NxtWatchContextProvider} from './context/GlobalContext'
import GlobalStyle from './styles/GlobalStyles'
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import Trending from './pages/Trending'
import Gaming from './pages/Gaming'
import SavedVideos from './pages/SavedVideos'
import VideoItemDetails from './pages/VideoItemDetails'
import NotFound from './pages/NotFound'
import './App.css'

// example components
// const About = () => <h1>Trending Videos</h1>
// const Program = () => <h1>This is Program</h1>
// const Softwares = () => <h1>This is Softwares</h1>

export default function App() {
  //   const location = useLocation()
  //   const isLoginRoute = location.pathname === '/login'
  //   const {isNavExpanded} = useNxtContext()

  //   useEffect(() => {
  //     if (isNavExpanded) {
  //       document.body.style.overflow = 'hidden'
  //     } else {
  //       document.body.style.overflow = 'auto'
  //     }

  //     // Cleanup the effect
  //     return () => {
  //       document.body.style.overflow = 'auto'
  //     }
  //   }, [isNavExpanded])

  return (
    <NxtWatchContextProvider>
      <GlobalStyle />
      {/* <AppLayoutContainer isLoginRoute={isLoginRoute}>
        {!isLoginRoute && <Header />}
        {!isLoginRoute && <Sidebar />} */}

      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
      {/* </AppLayoutContainer> */}
    </NxtWatchContextProvider>
  )
}
