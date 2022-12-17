import React, { useState } from 'react'
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
import axios from 'axios';
import  {useDispatch, useSelector } from 'react-redux'

import {getPosts} from '../actions/index'

  function Login() {
    const dispatch = useDispatch();
    // const posts = useSelector(state=>state.postReducer.posts)
  
    const [username,setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatching = ()=> dispatch(getPosts());


    const loginUser = async(e) =>{
      e.preventDefault()
      const res = await axios.post('http://localhost:5000/api/users/login', {username, password})      
      // dispatching();
      res.data&&window.location.replace('/');
    }

  return (
    <div>
<Box alignItems = 'center'
  as='form'
  onSubmit={loginUser}
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
        onChange={e=>setUsername(e.target.value)}

        />
    </Box>
    
    <Box width={1} mt={3} px={2}>
      <Label mb={1} htmlFor='password'>Password</Label>
      <Input
        type ='password'
        id='password'
        name='password'
        onChange={e=>setPassword(e.target.value)}

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