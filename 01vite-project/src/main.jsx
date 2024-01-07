import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = React.createElement(
  'a', // tag
  {href : 'https://google.com', target:'_blank'}, // props
  'Click me' // text to inject
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // anotherElement
    <App/>
 
)
