import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Composition from './Composition.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Composition/>
    {/* <App /> */}
  </StrictMode>,
)
