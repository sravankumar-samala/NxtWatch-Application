import {PremiumBannerContainer} from '../styles/HomeStyle'

export default function PremiumBanner({handleShowBanner}) {
  return (
    <PremiumBannerContainer data-testid="banner">
      <button type="button" data-testid="close" onClick={handleShowBanner}>
        &times;
      </button>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch logo"
      />
      <p>By Nxt Watch Premium prepaid plans with UPI</p>
      <button type="button">GET IT NOW</button>
    </PremiumBannerContainer>
  )
}
