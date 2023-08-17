import {formatDistanceToNow} from 'date-fns'

export default function formatVideoUploadDuration(uploadedAt) {
  const publishedDate = formatDistanceToNow(new Date(uploadedAt))
  const formattedDateString = publishedDate.substring(
    publishedDate.indexOf(' ') + 1,
  )
  return `${formattedDateString} ago`
}
