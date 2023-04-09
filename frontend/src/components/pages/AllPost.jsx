import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import CreatePost from '../Post/CreatePost'
import GetAllPosts from '../Post/GetAllPosts'
import axios from 'axios'

const AllPost = () => {
  const [posts, setPosts] = useState([]);

    async function allPosts(){
        await axios.get("https://adobemedia.onrender.com/posts")
       .then((res)=>setPosts(res.data))
       .catch((e)=>{
        console.log(e);
       })
    }
  return (
    <Box mt={'80px'}>
        <CreatePost allPosts={allPosts}/>
        <GetAllPosts />
    </Box>
  )
}

export default AllPost