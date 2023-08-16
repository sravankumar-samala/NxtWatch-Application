import {AiFillHome} from 'react-icons/ai'
import {FaFire} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {MdVideoLibrary} from 'react-icons/md'

export const navMenuLinks = [
  {
    to: '/',
    icon: <AiFillHome />,
    label: 'Home',
  },
  {
    to: '/trending',
    icon: <FaFire />,
    label: 'Trending',
  },
  {
    to: '/gaming',
    icon: <IoGameController />,
    label: 'Gaming',
  },
  {
    to: '/saved-videos',
    icon: <MdVideoLibrary />,
    label: 'Saved videos',
  },
]

export const socialMediaButtons = [
  {
    src:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png',
    alt: 'facebook logo',
  },
  {
    src:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png',
    alt: 'twitter logo',
  },
  {
    src:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png',
    alt: 'linked in logo',
  },
]
