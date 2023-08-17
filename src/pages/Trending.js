import {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import {AppLayoutContainer} from '../styles/GlobalStyles'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import PageLayoutContainer from '../Ui/PageLayoutContainer'
import apiStatusResults from '../services/apiStatusResult'
import TrendingSavedUnifiedSuccessView from '../Ui/TrendingSavedUnifiedSuccessView'
// import dynamicFailedComponentView from './DynamicFailedComponentView'

import FailedView from '../Ui/FailedComponent'
import {Heading, Paragraph, Button} from '../styles/FailedComponentStyles'

export default function Trending() {
  const {apiStatus, data, fetchData} = useFetch()
  const url = 'https://apis.ccbp.in/videos/trending'

  useEffect(() => {
    fetchData(url)
  }, [fetchData, url])

  const handleRetry = () => fetchData(url)

  const SuccessView = () => (
    <TrendingSavedUnifiedSuccessView videosData={data} />
  )

  const FailureView = () => (
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
    <AppLayoutContainer data-testid="trending">
      <Header />
      <Sidebar />
      <PageLayoutContainer pageName="Trending">
        {apiStatusResults(apiStatus, SuccessView, FailureView)}
      </PageLayoutContainer>
    </AppLayoutContainer>
  )
}
