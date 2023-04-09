import { Button, Input, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import axios from "axios";
import { AccountContext } from '../../App';

const initState = {
    name: "",
    email: "",
    bio: ""
}

const UserForm = () => {
    const [form, setForm] = useState(initState);
    const toast = useToast()
    const {haveUser, toggleHaveUser} = useContext(AccountContext);

    const handleChange = (e)=>{
      const {name, value} = e.target;
      
      setForm({
        ...form,
        [name]: value
      });
    }

    async function createAccount(e){
      e.preventDefault();
      await axios({
        url: "https://adobemedia.onrender.com/users",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8"
        },
        data: form
      })
        .then((res) => {
            // console.log(res.data);
            localStorage.setItem("adobeMedia", JSON.stringify(res.data));
            toast({
              title: 'Login Success.',
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
            toggleHaveUser();
        })
        .catch((e) => {
          if(e.response.data === "This email is already in use try with other email."){
            toast({
              title: 'This email is already in use try with other email.',
              status: 'warning',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          }else{
            toast({
              title: 'Something went worng try again.',
              status: 'warning',
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          }
        });
      setForm({
        name: "",
        email: "",
        bio: ""
      });
    }

  return (
    <>
      <form onSubmit={createAccount}>
        <Input 
          type={"text"}
          onChange={handleChange} 
          value={form.name} 
          name="name" 
          required="required" 
          placeholder='Name'
        />
        <Input 
          type={"email"} 
          onChange={handleChange} 
          value={form.email} 
          name="email" 
          required="required"
          placeholder='Email' 
          mt={10} 
          />
        <Input 
          type={"text"} 
          onChange={handleChange} 
          value={form.bio} 
          name="bio" 
          required="required"
          placeholder='Write about yourself' 
          mt={10} 
        />
        <Button type='submit' mt={10} colorScheme='teal' size='md'>
            Create Account
        </Button>
      </form>
    </>
  )
}

export default UserForm