import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc';
import { FcDislike } from 'react-icons/fc';

const PostCard = ({user_id, content, likes, createdAt}) => {
  createdAt = createdAt.split('-')
  return (
    <Box w={['300px', '500px']} m={'auto'} mb={7} boxShadow='outline' p='6' rounded='md' bg='white'>
        <Text textAlign={'left'}>Published on: {createdAt[1]}-{createdAt[0]}</Text>

        <Text boxShadow='xl' p='6' rounded='md' bg='white' mt={3} color={'gray'}>{content}</Text>

        <Text textAlign={'left'} mt={3} fontFamily={'cursive'} fontWeight={'bold'}>Likes: {likes}</Text>

        <Box textAlign={'left'} mt={1} display={'flex'} gap={'20px'}>
          <FcLike size={25} cursor={'pointer'}/>
          <FcDislike size={25} cursor={'pointer'}/>
        </Box>
    </Box>
  )
}

export default PostCard