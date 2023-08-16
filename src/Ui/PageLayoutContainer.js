import {FaFire} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {MdVideoLibrary} from 'react-icons/md'
import {
  PageContainer,
  PageTitleContainer,
  PageTitle,
} from '../styles/PageLayoutContainerStyles'

function renderPageLogo(pageName) {
  switch (pageName) {
    case 'Trending':
      return <FaFire />
    case 'Gaming':
      return <IoGameController />
    case 'Saved Videos':
      return <MdVideoLibrary />
    default:
      return null
  }
}

export default function PageLayoutContainer({children, pageName}) {
  return (
    <PageContainer>
      <PageTitleContainer>
        {renderPageLogo(pageName)}
        <PageTitle>{pageName}</PageTitle>
      </PageTitleContainer>
      {children}
    </PageContainer>
  )
}
