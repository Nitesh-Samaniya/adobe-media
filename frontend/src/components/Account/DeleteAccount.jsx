import React, { useContext } from 'react';
import { Box, Text, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { AccountContext } from '../../App';

const DeleteAccount = () => {
    const profile = JSON.parse(localStorage.getItem("adobeMedia")) || "";
    const toast = useToast();
    const {haveUser, toggleHaveUser} = useContext(AccountContext);


    const handleDelete = (e)=>{
        e.preventDefault();
        toggleHaveUser();
        axios.delete(`https://adobemedia.onrender.com/users/${profile._id}`)
        .then((res)=>
            toast({
            title: 'Account Delete Success.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: "top",
        }))
        .catch((e) => {
            toast({
              title: 'Account Already Deleted.',
              status: 'warning',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
        });
    }
  return (
    <Box>
        <Text textAlign={'center'}>This will permanently Remove your Account.</Text>
        <Button onClick={handleDelete} display={'block'} m={'auto'} mt={10} colorScheme='red'>Delete</Button>
    </Box>
  )
}

export default DeleteAccount