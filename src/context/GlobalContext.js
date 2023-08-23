import {useEffect, useReducer, createContext, useContext} from 'react'

const NxtWatchContext = createContext()

const initialState = {
  isLightTheme: localStorage.getItem('isLightTheme') !== 'false',
  savedVideosList: [],
  likedVideosList: [],
  dislikedVideosList: [],
  isNavExpanded: false,
}

// function that updates state with given conditions and values
const stateAfterUpdatingVideosList = (state, payload) => {
  const {videosList, video, actionType} = payload

  return {
    ...state,
    [videosList]:
      actionType === 'add'
        ? state[videosList].concat(video)
        : state[videosList].filter(eachVideo => eachVideo.id !== video.id),
  }
}

const reducer = (state, action) => {
  let newIsLightTheme

  switch (action.type) {
    case 'toggleTheme':
      newIsLightTheme = !state.isLightTheme
      localStorage.setItem('isLightTheme', newIsLightTheme ? 'true' : 'false')
      return {...state, isLightTheme: newIsLightTheme}

    // single action for all the lists in the global state
    case 'updateVideosList':
      return stateAfterUpdatingVideosList(state, action.payload)

    case 'toggleNavExpanded':
      return {...state, isNavExpanded: !state.isNavExpanded}
    default:
      throw new Error('Unknown action')
  }
}

const NxtWatchContextProvider = ({children}) => {
  //   const [navToggledBack, setNavToggledBack] = useState(false)
  const [
    {
      isLightTheme,
      savedVideosList,
      likedVideosList,
      dislikedVideosList,
      isNavExpanded,
    },
    dispatch,
  ] = useReducer(reducer, initialState)

  useEffect(
    () =>
      document.documentElement.setAttribute(
        'data-theme',
        isLightTheme ? 'light' : 'dark',
      ),
    [isLightTheme],
  )

  //   useEffect(() => {
  //     const bodyEl = document.body
  //     const mediaQuery = window.matchMedia('(max-width: 767px)')

  //     if (isNavExpanded && mediaQuery.matches) {
  //       bodyEl.classList.add('hide-body-overflow')
  //       bodyEl.style.paddingInlineEnd = '9px'
  //     } else {
  //       bodyEl.classList.remove('hide-body-overflow')
  //       bodyEl.style.paddingInlineEnd = '0'
  //     }
  //   }, [isNavExpanded])

  //   useEffect(() => {
  //     const mediaQuery = window.matchMedia('(min-width: 768px)')

  //     // Define a function to handle media query changes
  //     function handleMediaQueryChange(event) {
  //       if (event.matches) {
  //         console.log('size increased')
  //       } else console.log('size reduced')
  //     }

  //     // Call the handler initially
  //     handleMediaQueryChange(mediaQuery)

  //     // Add event listener to handle window resize
  //     window.addEventListener('resize', handleMediaQueryChange)

  //     // Clean up the event listener when the component un-mounts
  //     return () => {
  //       window.removeEventListener('resize', handleMediaQueryChange)
  //     }
  //   }, [])

  return (
    <NxtWatchContext.Provider
      value={{
        isLightTheme,
        savedVideosList,
        likedVideosList,
        dislikedVideosList,
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
