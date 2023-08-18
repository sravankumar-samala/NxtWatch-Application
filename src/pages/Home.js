import {useState, useEffect, useRef, useMemo} from 'react'
import {BiSearch} from 'react-icons/bi'
import useFetch from '../hooks/useFetch'
import ApiStatusResults from '../services/apiStatusResult'
import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import VideosSuccessView from '../Ui/VideosSuccessView'
import FailedView from '../Ui/FailedComponent'
// import {useNxtContext} from '../context/GlobalContext'
import {MainContainer, FormContainer, SearchButton} from '../styles/HomeStyle'
import {Heading, Paragraph, Button} from '../styles/FailedComponentStyles'

// main component starts here
export default function Home() {
  const [fetchTrigger, setFetchTrigger] = useState(true)
  const searchValueRef = useRef('')
  const {apiStatus, data, fetchData} = useFetch()

  useEffect(() => {
    if (fetchTrigger) {
      const BaseUrl = `https://apis.ccbp.in/videos/all?search=${searchValueRef.current.value}`
      fetchData(BaseUrl)
      setFetchTrigger(false)
    }

    return () => setFetchTrigger(false)
  }, [fetchTrigger, searchValueRef, fetchData, data])

  const handleSearch = e => {
    e.preventDefault()
    setFetchTrigger(true)
  }

  const handleRetry = () => {
    searchValueRef.current.value = ''
    fetchData.current.value = null
    setFetchTrigger(true)
  }

  const SuccessView = () => (
    <VideosSuccessView data={data} apiStatus={apiStatus} retry={handleRetry} />
  )

  // Re-assigning failure component to have an individual content for every failed component
  const ApiFailedView = () => (
    <FailedView failureType="apiFailure">
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
          <input type="text" ref={searchValueRef} placeholder="Search" />
          <SearchButton type="submit" data-testid="searchButton">
            <BiSearch />
          </SearchButton>
        </FormContainer>

        {ApiStatusResults(apiStatus, SuccessView, ApiFailedView)}
      </MainContainer>
    </AppLayoutContainer>
  )
}
