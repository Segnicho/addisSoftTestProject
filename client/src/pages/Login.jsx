import React from 'react'
import {
    Box,
    Card,
    Flex,
    Button,
    Heading,
    // Text
  } from 'rebass'
import {
    Label,
    Input,
  } from '@rebass/forms';

  function Login() {
  return (
    <div>
<Box
        alignItems = 'center'

    
  as='form'
  onSubmit={e => e.preventDefault()}
  py={3}>
<Flex mx={-2} mb={3}
        alignItems = 'center'

>
<Card
      sx={{
        display :'flex-column',
        alignItems:'center',
        flex: 'column',
        p: 10,
        mx:'auto',
        
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
        <Heading my={3}>LOGIN PAGE</Heading>
    <Box width={1} px={2}>
      <Label mb={1} htmlFor='username'>Username</Label>
      <Input
        id='username'
        name='username'
        />
    </Box>
    
    <Box width={1} mt={3} px={2}>
      <Label mb={1} htmlFor='password'>Password</Label>
      <Input
        type ='password'
        id='password'
        name='password'
      />
    </Box>
    <Button bg='teal' mx="auto" ml={4} mt={3}> LOGIN </Button>

   </Card>
  </Flex>

  </Box>
        
    </div>
  )
}

export default Login