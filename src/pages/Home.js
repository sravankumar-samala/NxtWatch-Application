import {useState, useEffect, useRef} from 'react'
import {BiSearch} from 'react-icons/bi'
// import fetchVideosApi from '../services/FetchVideosApi'
import useFetch from '../hooks/useFetch'
import ApiStatusResults from '../services/apiStatusResult'
import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import VideosSuccessView from '../Ui/VideosSuccessView'
import FailedView from '../Ui/FailedComponent'
// import {useNxtContext} from '../context/GlobalContext'
// import {MainContainer} from '../styles/GlobalStyles'
import {MainContainer, FormContainer, SearchButton} from '../styles/HomeStyle'
import {Heading, Paragraph, Button} from '../styles/FailedComponentStyles'

// main component starts here

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [fetchTrigger, setFetchTrigger] = useState(true)
  const fetchTriggerRef = useRef(true)
  const {apiStatus, data, fetchData} = useFetch()

  //   console.log(apiStatus, data)

  useEffect(() => {
    if (fetchTrigger || fetchTriggerRef.current) {
      const BaseUrl = `https://apis.ccbp.in/videos/all?search=${searchValue}`
      fetchData(BaseUrl)
      setFetchTrigger(false)
      fetchTriggerRef.current = false
    }

    return () => setFetchTrigger(false)
  }, [fetchTrigger, searchValue, fetchData])

  const handleSearch = e => {
    e.preventDefault()
    setFetchTrigger(true)
  }

  const handleRetry = () => {
    setSearchValue('')
    setFetchTrigger(true)
  }

  // This is to pass component as a function parameter which requires some props
  const SuccessView = () => (
    <VideosSuccessView data={data} apiStatus={apiStatus} />
  )

  // Re-assigning failure component to have an individual content for every failed component
  const FailedViewComponent = () => (
    <FailedView>
      <Heading>Oops! Something Went Wrong</Heading>
      <Paragraph>
        We are having some trouble to complete your request.
      </Paragraph>
      <Paragraph>Please try again.</Paragraph>
      <Button type="button" onClick={handleRetry}>
        Retry
      </Button>
    </FailedView>
  )

  return (
    <AppLayoutContainer data-testid="home">
      <Header />
      <Sidebar />
      <MainContainer>
        <FormContainer onSubmit={handleSearch}>
          <input
            type="text"
            value={searchValue}
            placeholder="Search"
            onChange={e => setSearchValue(e.target.value)}
          />
          <SearchButton type="submit" data-testid="searchButton">
            <BiSearch />
          </SearchButton>
        </FormContainer>
        {ApiStatusResults(apiStatus, SuccessView, FailedViewComponent)}
      </MainContainer>
    </AppLayoutContainer>
  )
}
