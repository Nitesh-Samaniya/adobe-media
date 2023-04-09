import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import PostCard from './PostCard';

const GetAllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
       axios.get("https://adobemedia.onrender.com/posts")
       .then((res)=>setPosts(res.data))
       .catch((e)=>{
        console.log(e);
       }) 
    },[])
  return (
    <Box mt={10}>
        <Text mb={5} fontFamily={'cursive'} fontSize={'2xl'}>Browse Posts</Text>
        {
            posts?.map((el)=>(
                <PostCard
                    key={el._id}
                    user_id={el.user_id} 
                    content={el.content}
                    likes={el.likes}
                    createdAt={el.createdAt}
                />
            ))
        }
    </Box>
  )
}

export default GetAllPosts