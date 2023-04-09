import React, { useState } from 'react'
import { Button, FormLabel, Input, useToast } from '@chakra-ui/react'
import axios from "axios";

const profile = JSON.parse(localStorage.getItem("adobeMedia")) || "";

const initState = {
    name: profile.name,
    bio: profile.bio
}

const EditProfile = () => {
    const [form, setForm] = useState(initState);
    const toast = useToast()

    const handleChange = (e)=>{
      const {name, value} = e.target;
      
      setForm({
        ...form,
        [name]: value
      });
    }

    async function EditProfile(e){
      e.preventDefault();
      await axios({
        url: `https://adobemedia.onrender.com/users/${profile._id}`,
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        data: form
      })
        .then((res) => {
            localStorage.setItem("adobeMedia", JSON.stringify(res.data));
            toast({
              title: 'Profile Edid Successfully.',
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

      setForm({
        name: "",
        bio: ""
      });
    }
  return (
    <>
      <form onSubmit={EditProfile}>
        <FormLabel>Name</FormLabel>
        <Input 
          type={"text"}
          onChange={handleChange} 
          value={form.name} 
          name="name" 
          required="required" 
          placeholder='Name'
          mb={5}
        />
        <FormLabel>Bio</FormLabel>
        <Input 
          type={"text"} 
          onChange={handleChange} 
          value={form.bio} 
          name="bio" 
          required="required"
          placeholder='Write about yourself' 
          mb={5} 
        />
        <Button type='submit' colorScheme='teal' size='md'>
            Edit
        </Button>
      </form>
    </>
  )
}

export default EditProfile