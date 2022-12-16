import React from 'react'
import  {useDispatch, useSelector } from 'react-redux'

import {getPosts} from '../actions/index'
 
import {
  Box,
  Flex,
  Image,
  Heading,
  Text

  // Text
} from 'rebass'
function Home() {
  const dispatch = useDispatch();
  const posts = useSelector(state=>state.postReducer.posts)


  return (
    <>
    
    <div>
      <button onClick={()=>dispatch(getPosts())}>Here</button>
      Posts: {posts.map((post)=>(
        <div>{post.title}</div>
      ))}
    </div>
  
        {/* <Flex flexWrap='wrap'>
  <Box
    p={3}
    width={[ '100%', '50%', '33%' ]}
        >
      <Image src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' height={250}/>
    <Heading>The First Heading</Heading>
    <Text>The first description</Text>
  </Box>
  <Box
    p={3}
    width={[ '100%', '50%','33%' ]}    >
      <Image src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' height={250}/>
      <Heading>The Second Heading</Heading>
      <Text>The Second description</Text>

  </Box>
  <Box
    p={3}
    width={[ '100%', '50%','33%' ]}    >
      <Image src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' height={250}/>
      <Heading>The Third Heading</Heading>
      <Text>The Third description</Text>

  </Box>
  
  <Box
    p={3}
    width={[ '100%', '50%','33%']}    >
      <Image src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' height={250}/>
      <Heading>The Third Heading</Heading>
      <Text>The Third description</Text>

  </Box>
  
</Flex> */}
</>
)
}



export default Home
