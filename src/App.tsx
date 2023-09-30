import { Button, useColorMode } from "@chakra-ui/react"
import { PromptShow, PromptsIndex } from "./pages"

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
