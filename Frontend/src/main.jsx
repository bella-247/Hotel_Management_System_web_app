import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TabProvider } from './Components/Contexts/navTab-Context';
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TabProvider>
      <App />
    </TabProvider>
  </StrictMode>,
)
