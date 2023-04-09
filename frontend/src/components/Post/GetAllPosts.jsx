import React, { useEffect, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import axios from 'axios';
import PostCard from './PostCard';

const GetAllPosts = () => {
    const [posts, setPosts] = useState([]);

    async function allPosts(){
        await axios.get("https://adobemedia.onrender.com/posts")
       .then((res)=>setPosts(res.data))
       .catch((e)=>{
        console.log(e);
       })
    }

    const handleLikes = async(id)=>{
        await axios({
        url: `https://adobemedia.onrender.com/posts/${id}/like`,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
        })
            .then((res)=>allPosts())
            .catch((e)=>console.log(e.response.data))
  }

  const handleDisLikes = async(id)=>{
        await axios({
        url: `https://adobemedia.onrender.com/posts/${id}/unlike`,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
        })
            .then((res)=>allPosts())
            .catch((e)=>console.log(e.response.data))
  }

    const handleDeletePost = async(id)=>{
        await axios.delete(`https://adobemedia.onrender.com/posts/${id}`)
        .then((res)=>allPosts())
        .catch((e)=>console.log(e.response.data))
    }

    useEffect(()=>{
        allPosts();
    },[])

  return (
    <Box mt={10}>
        <Text mb={5} fontFamily={'cursive'} fontSize={'2xl'}>Browse Posts</Text>
        {
            posts?.map((el)=>(
                <PostCard
                    key={el._id}
                    post_id={el._id}
                    user_id={el.user_id} 
                    content={el.content}
                    likes={el.likes}
                    createdAt={el.createdAt}
                    handleLikes={handleLikes}
                    handleDisLikes={handleDisLikes}
                    handleDeletePost={handleDeletePost}
                />
            ))
        }
    </Box>
  )
}

export default GetAllPosts