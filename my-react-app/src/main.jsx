import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormState from './FormState'
// import FormInput from './FormInput'
// import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FormInput /> */}
    <FormState />
  </StrictMode>,
)
