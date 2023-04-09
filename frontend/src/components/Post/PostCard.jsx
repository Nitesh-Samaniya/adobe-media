import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { FcLike } from 'react-icons/fc';
import { FcDislike } from 'react-icons/fc';
import { AiFillDelete } from 'react-icons/ai';
import ChangeContent from './ChangeContent';

const PostCard = ({post_id, user_id, content, likes, createdAt, handleLikes, handleDisLikes, handleDeletePost, allPosts}) => {
  createdAt = createdAt.split('-')

  return (
    <Box w={['300px', '500px']} m={'auto'} mb={7} boxShadow='outline' p='6' rounded='md'>
        <Box display={'flex'} justifyContent={'space-between'}>
          <Text textAlign={'left'} color={'blue'}>Published on: {createdAt[1]}-{createdAt[0]}</Text>
          <Box>
            <AiFillDelete size={25} cursor={'pointer'} onClick={()=>handleDeletePost(post_id)}/>
          </Box>
        </Box>

        <Text boxShadow='xl' p='6' rounded='md' bg='white' mt={3} color={'gray'}>{content}</Text>

        <Text textAlign={'left'} mt={3} fontFamily={'cursive'} fontWeight={'bold'} color={'teal'}>Likes: {likes}</Text>

        <Box textAlign={'left'} mt={1} display={'flex'} justifyContent={'space-between'}>

          <Box display={'flex'} gap={'20px'}>
            <FcLike size={25} cursor={'pointer'} onClick={()=>handleLikes(post_id)}/>
            <FcDislike size={25} cursor={'pointer'} onClick={()=>handleDisLikes(post_id)}/>
          </Box>

          <Box>
            <ChangeContent post_id={post_id} allPosts={allPosts}/>
          </Box>
        </Box>
    </Box>
  )
}

export default PostCard