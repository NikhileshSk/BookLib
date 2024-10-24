import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import bookStore from './redux/bookStore.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </StrictMode>,
)


