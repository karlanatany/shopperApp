import { GlobalState } from "./global/GlobalState.js";
import { Products } from "./sections/Products.js";
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <GlobalState>
      <Flex flexDir={'row'} w={'100wh'} h={'100vh'}>
        <Products />
      </Flex>
    </GlobalState>
  )
}

export default App;
