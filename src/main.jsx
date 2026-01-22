
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ContentProvider from "./context/ContentContext";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ContentProvider>
      <App />
    </ContentProvider>
  </BrowserRouter>,
)
