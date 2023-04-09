import React from 'react'
import { Box } from '@chakra-ui/react'
import CreatePost from '../Post/CreatePost'
import GetAllPosts from '../Post/GetAllPosts'

const AllPost = () => {
  return (
    <Box mt={'80px'}>
        <CreatePost />
        <GetAllPosts />
    </Box>
  )
}

export default AllPost