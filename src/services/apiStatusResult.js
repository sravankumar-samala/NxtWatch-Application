import LoadingView from '../Ui/Loading'

export default function ApiStatusResult(status, SuccessView, FailureView) {
  switch (status) {
    case 'Pending':
      return <LoadingView />
    case 'Success':
      return <SuccessView />
    case 'Failed':
      return <FailureView />
    default:
      return null
  }
}
