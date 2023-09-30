import * as React from "react"
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import { Home, PromptShow, PromptsIndex } from "./pages"

import { Navbar } from "./components";

function App() {




  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/prompts",
      element: <PromptsIndex />
    },
    {
      path: "/prompts/:id",
      element: <PromptShow />
    }

  ])


  const location = useLocation()

  if (!element) return null

  console.log('hitting app')


  return (
    <>
    <Navbar/>
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    
    </>
    


  



  )
}

export default App
