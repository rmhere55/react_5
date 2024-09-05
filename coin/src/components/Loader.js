import { Box, Spinner, VStack } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <VStack h={'50vh'} justifyContent={'center'}>
<Box transform={'scale(3)'}>
  <Spinner size={'lg'} thickness={'1.5px'} color={'#3B82F6' } />
</Box>
    </VStack>
  )
}

export default Loader