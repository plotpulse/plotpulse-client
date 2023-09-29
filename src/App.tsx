import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react"


function App() {

  const { toggleColorMode } = useColorMode()

  const bg = useColorModeValue('primary.lm', 'primary.dm')
  

  return (
    <>
      <p>Hello World</p>
      <Button bg={bg} onClick={toggleColorMode}>Toggle Color Mode</Button>
    </>
  )
}

export default App
