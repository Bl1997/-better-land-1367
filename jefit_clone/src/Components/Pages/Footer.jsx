import React from 'react'
import {  Box, Flex,Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>

<Box bgColor={"gray.200"} marginTop="80px">
 <Flex justifyContent={"space-around"}>

<Box marginTop={"50px"}>
    <Text  marginBottom={"20px"} fontSize={"xl"} fontWeight="semibold">Products</Text>
    <Text marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Elite Membership</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Coach</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="/register">Signup</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="/login">Login</Link></Text>
</Box>


<Box marginTop={"50px"}>
    <Text  marginBottom={"20px"} fontSize={"xl"} fontWeight="semibold">Resource</Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Workout Plans</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Exercises Database</Link></Text>
    <Text marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Community</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Help Center</Link></Text>
</Box>

<Box marginTop={"50px"}>
    <Text marginBottom={"20px"} fontSize={"xl"} fontWeight="semibold">Legal Press</Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Privacy Policy</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Terms of Use</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">IP / DMCA Notices</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Press & Mediar</Link></Text>
</Box>

<Box marginTop={"50px"} >
    <Text  marginBottom={"20px"} fontSize={"xl"} fontWeight="semibold">Follow US</Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Blog</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Facebook</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Twitter</Link></Text>
    <Text  marginTop={"5px"} _hover={{color:"blue", border:"0px"}} borderBottom={"1.5px solid"} color={"gray"}><Link to="#">Instagram</Link></Text>
</Box>

 </Flex>

<Box marginTop={"100px"} textAlign="center">
<Text>Copyright © 2010 - 2022 Jefit, Inc.</Text>
<Text>All Rights Reserved.</Text>

</Box>

</Box>


    </div>
  )
}

export default Footer