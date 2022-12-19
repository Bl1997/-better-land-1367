import React from 'react'
import { Box, Button, Flex, Spacer, Text,Image} from "@chakra-ui/react"
import { useRef } from 'react'
import { Link } from 'react-router-dom';

import Footer from './Footer';
const Show = () => {

    const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  }


  return (
    <div>

      

<Flex>
<Box >
<Box><Text shadow={"base"}>Exercies Database</Text></Box>

<Flex width={"180px" } shadow="2xl" border={"1px solid gray"}>
    <Box>
        <Text>Abs</Text>
        <Text>Back</Text>
        <Text>Biceps</Text>
        <Text>Chest</Text>
        <Text>Forearm</Text>
        <Text>Glutes</Text>
        <Text>Shoulders</Text>
        <Text>Triceps</Text>
        <Text>Upper Legs</Text>
        <Text>Lower Legs</Text>
        <Text>Cardio</Text>
        <Text>All</Text>
    </Box>
    <Spacer/>
    <Box><Text>(284)</Text>
    <Text>(138)</Text>
    <Text>(116)</Text>
    <Text>(139)</Text>
    <Text>(51)</Text>
    <Text>(26)</Text>
    <Text>(207)</Text>
    <Text>(109)</Text>
    <Text>(176)</Text>
    <Text>(43)</Text>
    <Text>(19)</Text>
    <Text>(1309)</Text>
    </Box>
</Flex>
</Box>

<Box width={"70%"}>
    <Text fontSize={"3xl"}  color={"blue.500"} borderBottom="0.5px solid">Barbell Alternating Front and Back Press</Text>
   
<video ref={vidRef}  src='http://player.vimeo.com/external/160307163.hd.mp4?s=be0e3d4af978b74010d5a5cf30ceeffb8d837e0a&profile_id=119&oauth2_token_id=435967617'>
   
    
</video>
<Button marginLeft={"100px"} bgColor={"blue.400"} color={"white"} onClick={handlePlayVideo}>Watch Video</Button>

<Flex gap={"20"}>
  <Image border={"10px solid lightblue" } width={"300px"} src="https://www.jefit.com/images/exercises/1080_664/4616.jpg"></Image>
  <Image border={"10px solid lightblue" } width={"300px"} src="https://www.jefit.com/images/exercises/1080_664/4618.jpg"/>
</Flex>
<Image marginTop={"5"} border={"10px solid lightblue" } width={"300px"} src='https://www.jefit.com/images/exercises/1080_664/4617.jpg' />

<Flex gap={"120"}><Box >
<Text borderBottom={"0.5px solid gray"} fontSize={"3xl"} color="gray">Exercise Details</Text>
<Box marginTop={"2"}><Flex><Text  fontWeight={"semibold"}>Main Muscle Group :</Text><Text marginTop={"1"} fontSize={"small"}>  Shoulders</Text>

</Flex></Box>

<Box marginTop={"2"}><Flex><Text  fontWeight={"semibold"}>Other Muscle Groups : </Text><Text marginTop={"1"} fontSize={"small"}>  Triceps</Text>

</Flex></Box>

<Box marginTop={"2"}><Flex><Text  fontWeight={"semibold"}>Type :</Text><Text marginTop={"1"} fontSize={"small"}>  Strength</Text>



</Flex></Box>

<Box marginTop={"2"}><Flex><Text  fontWeight={"semibold"}>Mechanics  :</Text><Text marginTop={"1"} fontSize={"small"}>  Compound</Text>



</Flex></Box>

<Box marginTop={"2"}><Flex><Text  fontWeight={"semibold"}>Equipment  :</Text><Text marginTop={"1"} fontSize={"small"}>  Barbell</Text>



</Flex></Box>

<Box marginTop={"2"}><Flex><Text   fontWeight={"semibold"}>Difficulty  :</Text><Text marginTop={"1"} fontSize={"small"}>  Intermediate</Text>



</Flex></Box>
</Box>
<Box>
  <Text borderBottom={"0.5px solid gray"} fontSize={"3xl"} color="gray">Targeted Muscle Group</Text>
  <Image marginTop={"2"} src='https://www.jefit.com/images/exercises/b6.jpg'></Image>
</Box>
</Flex>
</Box>


</Flex>


<Box>
<Text borderBottom={"0.5px solid gray"} fontSize={"3xl"} color="gray">More  Exerceis</Text>
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
</Box>




<Footer/>

    </div>
  )
}

export default Show