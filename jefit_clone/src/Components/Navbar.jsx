import React from 'react'
import {Flex,Box, ButtonGroup, Button,Heading, Spacer,Text, useDisclosure,
  MenuItem,Image,
  Menu,
  MenuButton,
  MenuList,useColorModeValue, color} from "@chakra-ui/react"
  import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
<div  style={{backgroundColor:" #2D8CFF" , color:"white", fontWeight:"600"}}>
<Flex minWidth='max-content' alignItems='center' gap='5'>
  <Box p='6'>
    <Image src='https://document-export.canva.com/VYZOk/DAFUj6VYZOk/2/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20221213%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221213T171511Z&X-Amz-Expires=66732&X-Amz-Signature=6ffddd0e3e80bd7a3a2b87c946ada452eeadf1508379f2be079c5060a6e82249&X-Amz-SignedHeaders=host&response-expires=Wed%2C%2014%20Dec%202022%2011%3A47%3A23%20GMT'/>
  </Box>
  <Spacer/>

  <Box><Menu isOpen={isOpen}>
            <MenuButton fontSize={"2xl"}
                variant="red"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover= {{backgroundColor:" #2D8CFF"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                Workout Plans {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList bg={" #2D8CFF"} color={"white"} fontSize="xl" onMouseEnter={onOpen} onMouseLeave={onClose}>
                <MenuItem bg={" #2D8CFF"}>Pro-Designed plans</MenuItem>
                <MenuItem bg={" #2D8CFF"}>Create My Plan</MenuItem>
              
            </MenuList>
        </Menu>
        </Box>
  <Box display={"flex"} gap="50px" fontSize={"2xl"}>
  <Text> <Link to="/coach">Coach</Link></Text>
    <Text> Elite</Text>
    
    <Text>Exercies</Text>
    <Text>Community</Text>

    </Box>

  <Spacer/>
  <ButtonGroup gap="20px">
  <Button colorScheme='teal'>Log In</Button>
    <Button bgColor='white' color={" #2D8CFF"} _hover={{bgColor:" blue" ,color:"white"}}><Link to="/register"> Sign Up</Link></Button>
    
  </ButtonGroup>
</Flex>
</div>
    </div>
  )
}

export default Navbar