import {useEffect, useReducer, createContext, useContext} from 'react'

const NxtWatchContext = createContext()

const initialState = {
  isLightTheme: localStorage.getItem('isLightTheme') !== 'false',
  savedVideosList: [],
  isNavExpanded: false,
}

const reducer = (state, action) => {
  let newIsLightTheme
  switch (action.type) {
    case 'toggleTheme':
      newIsLightTheme = !state.isLightTheme
      localStorage.setItem('isLightTheme', newIsLightTheme ? 'true' : 'false')
      return {...state, isLightTheme: newIsLightTheme}
    case 'addToSavedVideos':
      return {
        ...state,
        savedVideosList: state.savedVideosList.concat(action.payload),
      }
    case 'toggleNavExpanded':
      return {...state, isNavExpanded: !state.isNavExpanded}
    default:
      throw new Error('Unknown action')
  }
}

const NxtWatchContextProvider = ({children}) => {
  //   const [navToggledBack, setNavToggledBack] = useState(false)
  const [{isLightTheme, savedVideosList, isNavExpanded}, dispatch] = useReducer(
    reducer,
    initialState,
  )

  useEffect(
    () =>
      document.documentElement.setAttribute(
        'data-theme',
        isLightTheme ? 'light' : 'dark',
      ),
    [isLightTheme],
  )

  useEffect(() => {
    const bodyEl = document.body
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    if (isNavExpanded && mediaQuery.matches) {
      bodyEl.classList.add('hide-body-overflow')
      bodyEl.style.paddingInlineEnd = '9px'
    } else {
      bodyEl.classList.remove('hide-body-overflow')
      bodyEl.style.paddingInlineEnd = '0'
    }
  }, [isNavExpanded])

  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia('(min-width: 768px)')

  //     // Define a function to handle media query changes
  //     function handleMediaQueryChange(event) {
  //       if (event.matches && isNavExpanded) {
  //         console.log('navToggled')
  //       }
  //     }

  //     // Call the handler initially
  //     handleMediaQueryChange(mediaQuery)

  //     // Add event listener to handle window resize
  //     window.addEventListener('resize', handleMediaQueryChange)

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener('resize', handleMediaQueryChange)
  //     }
  //   }, [])

  return (
    <NxtWatchContext.Provider
      value={{
        isLightTheme,
        savedVideosList,
        isNavExpanded,
        dispatch,
      }}
    >
      {children}
    </NxtWatchContext.Provider>
  )
}

function useNxtContext() {
  const context = useContext(NxtWatchContext)
  if (context === undefined)
    throw new Error('Context was used outside the Context Provider.')
  return context
}

export {useNxtContext, NxtWatchContextProvider}
