// import {useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
// import {useNxtContext} from './context/GlobalContext'
import GlobalStyle from './styles/GlobalStyles'
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'

// example components
const About = () => <h1>This is About</h1>
const Program = () => <h1>This is Program</h1>
const Softwares = () => <h1>This is Softwares</h1>

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
    <>
      <GlobalStyle />
      {/* <AppLayoutContainer isLoginRoute={isLoginRoute}>
        {!isLoginRoute && <Header />}
        {!isLoginRoute && <Sidebar />} */}

      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About} />
        <ProtectedRoute exact path="/softwares" component={Softwares} />
        <ProtectedRoute exact path="/program" component={Program} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
      {/* </AppLayoutContainer> */}
    </>
  )
}
