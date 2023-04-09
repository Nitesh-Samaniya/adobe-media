import React, { useState } from 'react'
import { Textarea, Text, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';

const CreatePost = ({allPosts}) => {
    const [content, setContent] = useState("");
    const toast = useToast();
    const profile = JSON.parse(localStorage.getItem("adobeMedia")) || "";


    const handlePublish = async(e)=>{
        e.preventDefault();
        if(content.length === 0){
            toast({
                title: 'Cannot post empty Content.',
                description: "Atlest write something",
                status: 'warning',
                duration: 3000,
                isClosable: true,
                position: "top",
            })
        }else{
            await axios({
                url: "https://adobemedia.onrender.com/posts",
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=UTF-8"
                },
                data: {
                    user_id: profile._id,
                    content: content
                }
              })
                .then((res) => {
                    // console.log(res.data);
                    allPosts()
                    toast({
                      title: 'Published',
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                    })
                })
                .catch((e) => {
                    toast({
                      title: 'Something went worng try again.',
                      status: 'warning',
                      duration: 3000,
                      isClosable: true,
                      position: "top",
                    })
                });
        }
        setContent("");
    }
  return (
    <>
        <Text fontFamily={'cursive'} fontSize={'2xl'}>Create Post</Text>
        <Textarea 
            name='content'
            value={content}
            type={'text'}
            placeContent={'Your Content'}
            onChange={(e)=>setContent(e.target.value)}
            w={['300px','500px']}
        />
        <Button 
            display={'block'} 
            m={'auto'} mt={2} 
            colorScheme='teal'
            onClick={handlePublish}
        >Publish</Button>
    </>
  )
}

export default CreatePost