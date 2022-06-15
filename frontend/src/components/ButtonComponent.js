import { Button } from '@chakra-ui/react'

export const ButtonComponent = (props) => {
  return (
    <>
      <Button type={props.type} onClick={props.onClick} colorScheme='teal' variant='outline' mr={2} ml={2}>
        {props.text}
      </Button>
    </>
  )
}
