import React from 'react'
import { Box, Flex,   Text,Image, Button,Input } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import Footer from './Footer'

const Choose = () => {
  return (
    <div>

<Flex gap={"20"} textAlign="left" justifyContent={"space-around"} marginTop={"40px"}>
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
  <Box color={"gray"}><input type="checkbox" /> All</Box>
  <Box color={"gray"}><input type="checkbox" /> Bands</Box>
  <Box color={"gray"}> <input type="checkbox" />  Barbell</Box>
  <Box color={"gray"}><input type="checkbox" /> Bench</Box>
  <Box color={"gray"}> <input type="checkbox" /> Body Only</Box>
  <Box color={"gray"}> <input type="checkbox" /> Dumbbell</Box>
  <Box color={"gray"}> <input type="checkbox" /> Exercise Ball</Box>
  <Box color={"gray"}> <input type="checkbox" /> Exercise Ball</Box>



</Box>

<Box>
<Box color={"gray"}><input type="checkbox" /> Foam Roll</Box>
<Box color={"gray"}><input type="checkbox" /> Kettlebell</Box>
<Box color={"gray"}><input type="checkbox" /> Machine - Cardio</Box>
<Box color={"gray"}><input type="checkbox" /> Machine - Strength</Box>
<Box color={"gray"}><input type="checkbox" /> Other</Box>
<Box color={"gray"}><input type="checkbox" /> Pull Bar</Box>
<Box color={"gray"}><input type="checkbox" /> Weight Plate</Box>


</Box>

</Flex>

<Flex gap={"10"} justifyContent="space-around" marginTop={"50px"}>

  <Box><Text color={"gray"} marginTop="30px">Type</Text></Box>
  <Box>
  <Box color={"gray"}><input type="checkbox" /> Strength</Box>
  <Box color={"gray"}><input type="checkbox" /> Stretching</Box>
  <Box color={"gray"}><input type="checkbox" /> Powerlifting</Box>
  <Box color={"gray"}><input type="checkbox" /> Olympic Weight Lifting</Box>

  </Box>
  <Box><Text color={"gray"} marginTop="30px">Difficulty</Text></Box>
  <Box gap={"2"}><Box color={"gray"}><input type="checkbox" />  Beginner</Box>
  <Box color={"gray"}><input type="checkbox" /> Intermediate</Box>
  <Box color={"gray"}><input type="checkbox" /> Expert</Box>
  </Box>
  <Box gap={"5"}><Input placeholder='Search...' border={"1px solid"}/> <Button marginLeft={"120px"} marginTop="10px" bgColor={"blue.400"} color="white">Search</Button></Box>
</Flex>

<Box marginTop={"30px"} textAlign={"center"}><Text fontSize={"3xl"}>Try Something New</Text>
<Text marginTop={"5px"} color={"gray"} fontSize="xl">Change up your routine with one of these exercises!</Text>
</Box>



<Box bgColor={"blue.50"}>
<Flex gap={"3"} marginTop="25px" >
  <Box textAlign={"center"}><Image shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/1400.jpg'/>
   <Text color={"blue.400"}>Cable Crunch Rotation</Text>
   <Text fontSize={"small"}>Abs, Shoulders, Chest</Text>
  </Box>


  <Box textAlign={"center"}><Image shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/3156.jpg'/>
   <Text color={"blue.400"}>Barbell Pullover</Text>
   <Text fontSize={"small"}>Back, Shoulders, Chest</Text>
  </Box>

  
  <Box textAlign={"center"}><Image shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/2552.jpg'/>
   <Text color={"blue.400"}>Barbell Pullover</Text>
   <Text fontSize={"small"}>Glutes, Abs, Upper Legs</Text>
  </Box>


  <Box textAlign={"center"}><Image shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/1024.jpg'/>
   <Text color={"blue.400"}>Cable Preacher Curl</Text>
   <Text fontSize={"small"}>Biceps, Forearm, Upper Legs</Text>
  </Box>


  <Box  textAlign={"center"}><Link to="/showpage"><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/1604.jpg'/></Link>
 <Text  color={"blue.400"}><Link to="/showpage">Barbell Bradford Rocky</Link></Text>
   <Text fontSize={"small"}>Shoulders, Triceps, Upper Legs</Text>
  </Box>

  <Box textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/2752.jpg'/>
   <Text color={"blue.400"}>Stability Ball Roman Twist</Text>
   <Text fontSize={"small"}>Abs, Triceps, Upper Legs</Text>
  </Box>

</Flex>

<Flex marginTop={"40px"} gap="3">


<Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/1376.jpg'/>
   <Text color={"blue.400"}>Side Jackknife</Text>
   <Text fontSize={"small"}>Abs, Triceps, Upper Legs</Text>
  </Box>


  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/5164.jpg'/>
   <Text color={"blue.400"}>Stability Ball Cable Overhead Curl</Text>
   <Text fontSize={"small"}>Biceps, Triceps, Upper Legs</Text>
  </Box>

  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/396.jpg'/>
   <Text color={"blue.400"}>Barbell Close Grip Curl</Text>
   <Text fontSize={"small"}>Biceps, Triceps, Upper Legs</Text>
  </Box>

  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/5052.jpg'/>
   <Text color={"blue.400"}>Machine Assisted Chin-Up</Text>
   <Text fontSize={"small"}>Back, Triceps, Upper Legs</Text>
  </Box>

  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/3904.jpg'/>
   <Text color={"blue.400"}>Decline Bench Weighted Twist</Text>
   <Text fontSize={"small"}>Abs, Back, Shoulders</Text>
  </Box>


  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/4268.jpg'/>
   <Text color={"blue.400"}>Barbell Reverse Grip Incline Bench Press</Text>
   <Text fontSize={"small"}>Chest, Shoulders, Triceps</Text>
  </Box>

  
  
</Flex>

<Flex marginTop={"40px"} gap="3">


<Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/3792.jpg'/>
   <Text color={"blue.400"}>Standing Quadricep Stretch</Text>
   <Text fontSize={"small"}>Upper Legs, Shoulders, Triceps</Text>
  </Box>


  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/4532.jpg'/>
   <Text color={"blue.400"}>Cable One-Arm Reverse Fly</Text>
   <Text fontSize={"small"}>Shoulders, Shoulders, Triceps</Text>
  </Box>

  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/452.jpg'/>
   <Text color={"blue.400"}>Barbell Preacher Curl</Text>
   <Text fontSize={"small"}>Biceps, Shoulders, Triceps</Text>
  </Box>

  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/2312.jpg'/>
   <Text color={"blue.400"}>Rotational Step-Up</Text>
   <Text fontSize={"small"}>Upper Legs, Glutes, Abs</Text>
  </Box>

  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/2600.jpg'/>
   <Text color={"blue.400"}>Stability Ball Narrow Push-Up</Text>
   <Text fontSize={"small"}>Chest, Abs, Triceps</Text>
  </Box>


  
  <Box  textAlign={"center"}><Image  shadow={"2xl"} src='https://www.jefit.com/images/exercises/1080_664/3692.jpg'/>
   <Text color={"blue.400"}>Recumbent Bike</Text>
   <Text fontSize={"small"}>Chest, Shoulders, Triceps</Text>
  </Box>

  
  
</Flex>

<Box marginTop={"20px"} alignItems={"center"} textAlign="center"><Button bgColor={"blue.500"} color="white">Create Custom Exercise </Button></Box>
</Box>
<Footer/>
    </div>
  )
}


export default Choose