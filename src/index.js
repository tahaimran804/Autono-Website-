import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import "./index.css";
import './Media_Queri.css'
import { BrowserRouter } from 'react-router-dom'
import 'animate.css';

ReactDom.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById('root')
)