import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Api from './Learning/Api'
// import UseEffect from './Learning/UseEffect'
// import TodoList from './todoList/todoList'
// import FormState from './FormState'
// import FormInput from './FormInput'
// import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FormInput /> */}
    {/* <FormState /> */}
    {/* <TodoList /> */}
    {/* <UseEffect /> */}
    <Api />
  </StrictMode>,
)
