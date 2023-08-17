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
  //   const [isLightTheme, changeTheme] = useState(true)
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
