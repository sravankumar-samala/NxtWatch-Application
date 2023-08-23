import {useState, useEffect, useRef} from 'react'
import {BiSearch} from 'react-icons/bi'
import useFetch from '../hooks/useFetch'
import PremiumBanner from '../Ui/PremiumBanner'
import ApiStatusResults from '../services/apiStatusResult'
import VideosSuccessView from '../Ui/VideosSuccessView'
import FailedView from '../Ui/FailedComponent'
import {MainContainer, FormContainer, SearchButton} from '../styles/HomeStyle'
import {Heading, Paragraph, Button} from '../styles/FailedComponentStyles'

// main component starts here
export default function Home() {
  const [showBanner, setShowBanner] = useState(true)
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

  const handlePremiumBanner = () => setShowBanner(prev => !prev)

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
    <MainContainer>
      {showBanner && <PremiumBanner handleShowBanner={handlePremiumBanner} />}

      <FormContainer onSubmit={handleSearch} $isBannerActive={showBanner}>
        <input type="search" ref={searchValueRef} placeholder="Search" />
        <SearchButton type="submit" data-testid="searchButton">
          <BiSearch />
        </SearchButton>
      </FormContainer>

      {ApiStatusResults(apiStatus, SuccessView, ApiFailedView)}
    </MainContainer>
  )
}
