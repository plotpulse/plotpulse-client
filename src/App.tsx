import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"


function App() {

  const { toggleColorMode } = useColorMode()

  
  

  return (
    <>
      <p>Hello World</p>
      <Button variant='brandPrimary' onClick={toggleColorMode}>Toggle Color Mode</Button>
    </>
  )
}

export default App
