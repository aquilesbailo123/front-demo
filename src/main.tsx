import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                  <StrictMode>
                        <App />
                  </StrictMode>
            </QueryClientProvider>
      </BrowserRouter>,
)
