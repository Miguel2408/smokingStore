import {useNumberInput, HStack, Button, Input} from '@chakra-ui/react';

const ItemCount = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW='200px'>
      <Button {...inc}>+</Button>
      <Input textAlign='center' {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  )

}

export default ItemCount