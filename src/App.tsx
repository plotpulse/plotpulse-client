import * as React from "react"
import { useLocation, useRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, PromptsIndex, Profile, SignUp, PromptCreate } from "./pages"

import { Navbar } from "./components";


function App() {

  console.log(window.location.origin)
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/feed",
      element: <PromptsIndex />
    },
    {
      path: "/feed/:promptId",
      element: <PromptsIndex />
    },
    {
      path: "/profile",
      element: <Profile />
    },
    {
      path: "/signup",
      element: <SignUp />
    },
    {
      path: "/create",
      element: <PromptCreate />
    },
  ])
  const location = useLocation()
  if (!element) return null
  console.log('hitting app')

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    </>
  )
}

export default App
