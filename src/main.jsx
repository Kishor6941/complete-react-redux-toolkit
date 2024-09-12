import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
//  import { store } from './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css';
 import { store } from './redux-toolkit/store.js'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

axios.interceptors.request.use((request) => {
  let req = {
    ...request,
    headers : {
      token : "kfhdskfdkfd"
    } 
  }
  return req
  
})


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  // </StrictMode>,
)
