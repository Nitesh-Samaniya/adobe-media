import React from 'react'
import { Image, Box } from '@chakra-ui/react'
import bg_img from "../../images/bg_img.jpg"

const HomeBgImg = () => {
  return (
    <Box>
        <Image src={bg_img} alt='bg_img' />
    </Box>
  )
}

export default HomeBgImg