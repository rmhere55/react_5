import React from 'react'
import { Button, Container, Heading, Text, Input, VStack, Avatar } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container maxW={'md'} centerContent>
      <form>
        <VStack 
          alignItems={'stretch'}
          spacing={8}
          w={'full ,96'}
          m={'auto'}
          my={16}
        >
          <Heading color="teal.300">WolfXCoins</Heading>
          <Avatar boxSize={'32'} alignSelf={'center'}/>
          <Input 
            placeholder="Name" 
            type="text" 
            required 
            focusBorderColor="teal.300" 
          />
          
          <Input 
            placeholder="Email" 
            type="email" 
            required 
            focusBorderColor="teal.300" 
          />

          <Input 
            placeholder="New password" 
            type="password" 
            required 
            focusBorderColor="teal.300" 
          />
          
          <Input 
            placeholder="Confirm password" 
            type="password" 
            required 
            focusBorderColor="teal.300" 
          />
          
          <Button colorScheme="teal" type="submit">Sign Up</Button>
          
          <Text textAlign={'right'}>Already registered? 
            <Button variant={'link'} colorScheme="teal" ml={2}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default SignUp
