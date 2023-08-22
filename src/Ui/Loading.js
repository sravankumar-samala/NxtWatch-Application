import Loader from 'react-loader-spinner'
import {LoaderContainer} from '../styles/GlobalStyles'

export default function LoadingView() {
  return (
    <LoaderContainer data-testid="loader">
      <Loader
        type="ThreeDots"
        color="var(--clr-para-accent)"
        height="50"
        width="50"
      />
    </LoaderContainer>
  )
}
