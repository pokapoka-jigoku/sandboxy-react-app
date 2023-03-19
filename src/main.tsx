import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DraftApp from './GPT'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    {/* <DraftApp /> */}
  </React.StrictMode>,
)
