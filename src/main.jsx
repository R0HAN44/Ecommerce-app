import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import {Provider} from 'react-redux'
import {store} from "./app/store.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './checkout.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/checkout" exact element={<Checkout />} />
    </Routes>
        
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
