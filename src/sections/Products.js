import React, { useContext } from "react"
import GlobalStateContext from "../global/GlobalStateContext.js"
import { Cart } from "./Cart.js"
import { CardProduct } from "../components/CardProduct.js"
import { Title } from "../components/Title.js"
import { Box, Flex } from "@chakra-ui/react"

export const Products = () => {
  const { states } = useContext(GlobalStateContext)
  const { products } = states


  const productsList = (products || []).map((product) => {
    return (
      <CardProduct
        key={product.id}
        product={product}
      />
    )
  })

  return (
    <Box w='100vw' >
      <Title>Lista de Produtos</Title>
      <Cart />
      <Flex flexDir={'row'} flexWrap={'wrap'} rowGap={5} columnGap={5}>
        {productsList}
      </Flex>
    </Box>
  )
}