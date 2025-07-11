import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('rootMain')!).render(
  <StrictMode>
    <div className='react-scoped'>
      <App />
    </div>
  </StrictMode>,
)
