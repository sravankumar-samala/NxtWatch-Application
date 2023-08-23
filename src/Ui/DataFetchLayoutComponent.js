import {useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import PageLayoutContainer from './PageLayoutContainer'
import apiStatusResults from '../services/apiStatusResult'
import FailedView from './FailedComponent'
import {Heading, Paragraph, Button} from '../styles/FailedComponentStyles'
import {VideoItemDetailsContainer} from '../styles/VideoItemDetailsStyles'

export default function DataFetchLayoutComponent({
  url,
  videoItemDetailsRoute,
  renderSuccessView,
  componentName,
}) {
  const {apiStatus, data, fetchData} = useFetch()

  useEffect(() => {
    fetchData(url)
  }, [fetchData, url])

  const handleRetry = () => fetchData(url)

  const SuccessView = () => renderSuccessView(data)

  const ApiFailureView = () => (
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
    <>
      {!videoItemDetailsRoute ? (
        <PageLayoutContainer pageName={componentName}>
          {apiStatusResults(apiStatus, SuccessView, ApiFailureView)}
        </PageLayoutContainer>
      ) : (
        <VideoItemDetailsContainer>
          {apiStatusResults(apiStatus, SuccessView, ApiFailureView)}
        </VideoItemDetailsContainer>
      )}
    </>
  )
}
