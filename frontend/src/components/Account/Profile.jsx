import {
    Avatar,
    Center,
    Heading,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import axios from "axios";
  
  export default function Profile() {
    const profile = JSON.parse(localStorage.getItem("adobeMedia")) || "";
    const joinedAt = profile.createdAt.split('-')
    const [getprofile, setGetProfile] = useState({});

    useEffect(()=>{
        axios.get(`https://adobemedia.onrender.com/users/${profile._id}`)
        .then((res)=>setGetProfile(res.data))
        .catch((e)=>{
            console.log(e);
        })
    },[profile])

    return (
      <Center py={2}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '18rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Avatar
                size={'md'}
                src={'https://avatars.dicebear.com/api/male/username.svg'}
            />  
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              {getprofile.name}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              {profile.email}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              {getprofile.bio}
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Joined at: {joinedAt[1]}-{joinedAt[0]}
            </Text>
          </Stack>
        </Stack>
      </Center>
    );
  }