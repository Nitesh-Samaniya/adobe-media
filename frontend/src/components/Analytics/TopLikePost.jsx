import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';

const TopLikePost = () => {
    const [topLikedPosts, setTopLikedPost] = useState([]);

    useEffect(()=>{
        axios.get("https://adobemedia.onrender.com/analytics//posts/top-liked")
            .then((res)=>setTopLikedPost(res.data.topLikedPosts))
            .catch((e)=>console.log(e))
    },[])

    console.log(topLikedPosts)
  return (
    <Box>
        <Text 
            mt={10}
            fontFamily={'cursive'}
            fontSize={'2xl'}
            fontWeight={'bold'}
        >Top 5 Posts</Text>

        
    </Box>
  )
}

export default TopLikePost