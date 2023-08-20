export default function VideoContentDetails({videoObj}) {
  const {title, description, publishedAt, viewCount, channel} = videoObj
  const {name, profileImageUrl, subscriberCount} = channel

  return (
    <div>
      <p>{title}</p>
      <div className="flex justify-between">
        <div className="flex">
          <p>{`${viewCount} views`}</p>
          <p>{publishedAt}</p>
        </div>
        <div>
          <button type="button">Like</button>
          <button type="button">Dislike</button>
          <button type="button">Save</button>
        </div>
      </div>
      <hr />
      <div className="flex">
        <img src={profileImageUrl} alt="channel logo" width="40" height="40" />
        <div>
          <div>
            <p>{name}</p>
            <p>{subscriberCount}</p>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
