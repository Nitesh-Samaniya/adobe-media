import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';

const Count = () => {
    const [countUser, setCountUser] = useState([]);
    const [countPosts, setCountPosts] = useState([]);

    async function getCountUser(){
        await axios.get("https://adobemedia.onrender.com/analytics/users")
            .then((res)=>setCountUser(res.data.length))
            .catch((e)=>console.log(e));
    }

    async function getCountPost(){
        await axios.get("https://adobemedia.onrender.com/analytics/posts")
            .then((res)=>setCountPosts(res.data.length))
            .catch((e)=>console.log(e));
    }

    useEffect(()=>{
        getCountUser();
        getCountPost();
    },[])

  return (
    <Box>
        <Text fontFamily={'cursive'} fontSize={'2xl'} fontWeight={'bold'} color={'red'}>Our Family: {countUser}</Text>
        <Text fontFamily={'cursive'} fontSize={'2xl'} fontWeight={'bold'} color={'red'}>Total Posts: {countPosts}</Text>
    </Box>
  )
}

export default Count