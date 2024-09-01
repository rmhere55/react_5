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
          w={'full','96'}
          m={'auto'}
          my={16}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar boxSize={'32'} alignSelf={'center'}/>
          <Input 
            placeholder="Name" 
            type="text" 
            required 
            focusBorderColor="purple.500" 
          />
          
          <Input 
            placeholder="Email" 
            type="email" 
            required 
            focusBorderColor="purple.500" 
          />

          <Input 
            placeholder="New password" 
            type="password" 
            required 
            focusBorderColor="purple.500" 
          />
          
          <Input 
            placeholder="Confirm password" 
            type="password" 
            required 
            focusBorderColor="purple.500" 
          />
          
          <Button colorScheme="purple" type="submit">Sign Up</Button>
          
          <Text textAlign={'right'}>Already registered? 
            <Button variant={'link'} colorScheme="purple" ml={2}>
              <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default SignUp
