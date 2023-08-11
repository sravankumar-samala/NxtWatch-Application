import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {NxtWatchContextProvider} from './context/GlobalContext'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NxtWatchContextProvider>
        <App />
      </NxtWatchContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
