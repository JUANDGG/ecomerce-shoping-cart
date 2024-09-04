//import React from 'react'
import ReactDom from 'react-dom/client'
import App from '@components/App.jsx'




const ELEMENT_ROOT =document.getElementById('root')

const ROOT =ReactDom.createRoot(ELEMENT_ROOT)

ROOT.render(<App />)


