import React from 'react'
import { Button, Container, Heading, Text, Input, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Login = () => {
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
          <Heading>Welcome Back</Heading>
          
          <Input 
            placeholder="Email" 
            type="email" 
            required 
            focusBorderColor="purple.500" 
          />

          <Input 
            placeholder="Password" 
            type="password" 
            required 
            focusBorderColor="purple.500" 
          />

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetpassword'}>Forget Password?</Link>
          </Button>

          <Button colorScheme="purple" type="submit">Log In</Button>
          
          <Text textAlign={'right'}>New User? 
            <Button variant={'link'} colorScheme="purple" ml={2}>
              <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  )
}

export default Login
