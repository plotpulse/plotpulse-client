import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'

import theme from './theme'


ReactDOM.createRoot(document.getElementById('root')!).render(



  <ChakraProvider theme={theme}>
    <Router>

      <App />
    </Router>
  </ChakraProvider>

)
