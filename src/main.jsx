//import React from 'react'
import ReactDom from 'react-dom/client'
import App from '@components/App.jsx'


import { GlobalContextProvider } from '@context/GlobalContext.jsx';


const ELEMENT_ROOT =document.getElementById('root')



ReactDom.createRoot(ELEMENT_ROOT).render(
    <GlobalContextProvider>
        <App />
    </GlobalContextProvider>


)


