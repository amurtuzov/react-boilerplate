import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App/App.tsx'
import { Provider } from 'react-redux'
import { setupStore } from '@/store'
import '@/plugins/axios.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
)
