import React from 'react'
import { Box, Flex, Link,  Text } from "@chakra-ui/react"

const Choose = () => {
  return (
    <div>

<Flex>
    <Box><Text color={"gray"} marginTop="50px">
Muscles</Text></Box>
<Box>
<Text>All..</Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Abs</Link></Text>

<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Back</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Biceps</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Chest</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#">Forearm</Link></Text>

</Box>
<Box>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Glutes</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Shoulders</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Triceps</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Upper Legs</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Lower Legs</Link></Text>
<Text  color={"gray"} _hover={{color:"blue.400"}}><Link to="/#"> Cardio</Link></Text>
</Box>
<Box><Text color={"gray"} marginTop="50px">
Equipment</Text></Box>

<Box>


</Box>

</Flex>


    </div>
  )
}


export default Choose