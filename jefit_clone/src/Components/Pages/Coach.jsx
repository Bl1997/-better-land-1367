import React,{useRef} from 'react'

import { Box,Text,Button, Flex,Image} from "@chakra-ui/react"
import Footer from './Footer';
const Coach = () => {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  }

  return (
    <div>

<Box marginTop={"50px"} textAlign={"center"} justifyContent={"center"} alignItems="center" gap={"10"}>
<Text fontStyle={"italic"} fontSize={"6xl"} fontWeight="bold">Personal Coach Mode</Text>
<Text fontSize={"xl"} marginLeft={"200px"} width={"70%"}>Expand your personal training business with Personal Coach Mode. Reduce your average time spent per client by connecting with fitness savvy clients remotely to provide personal workout plans, track their workout progress, and provide feedback.</Text>

</Box>
<Box textAlign={"center"}><Button height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="semibold" width={"300px"}  bgColor={"blue.400"} color="white" border="1px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >START 14-DAY FREE TRAIL</Button></Box>

<Flex marginTop={"100px"} marginLeft="100px">

<Box>
  <Text marginLeft={"50px"} fontWeight={"semibold"} fontSize={"2xl"} width="500px">Lower Your Time Spent On Each Client</Text>
  <Text marginTop={"20px"} color={"gray"} marginLeft={"50px"} fontWeight={"semibold"} fontSize={"2xl"} width="500px">Quickly and efficiently coach clients via GOFIT allowing you to expand your client base without increasing your time invested.</Text>

  <Text  marginTop={"20px"} marginLeft={"50px"} fontWeight={"semibold"} fontSize={"2xl"} width="500px">Easily Build and Sell Workout Plans</Text>


 <Text  marginTop={"20px"} color={"gray"} marginLeft={"50px"} fontWeight={"semibold"} fontSize={"2xl"} width="500px">Develop and distribute your premium workout plan with GOFIT’s robust exercise and workout plan libraries.</Text>

 <Text  marginTop={"20px"} marginLeft={"50px"} fontWeight={"semibold"} fontSize={"2xl"} width="500px">Build Your Brand</Text>


<Text  marginTop={"20px"} color={"gray"} marginLeft={"50px"} fontWeight={"semibold"} fontSize={"2xl"} width="500px">Build a profile that highlights your experience, client results, or certifications and attracts future clients.</Text>
<Button marginLeft={"50px"} height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} bgColor={"white"} color="blue.400" border="2px solid" _hover={{bgColor:"blue.500" ,color:"white"}} >START HERE</Button>

</Box>


<Box marginTop={"50px"} marginLeft={"100px"} alignItems={"end"}><video  ref={vidRef} width={"90%"}  src="https://www.jefit.com/wp/wp-content/uploads/2020/12/Screen-Recording-2020-12-08-at-1.23.10-PM.mov"></video>
<Button marginLeft={"150px"} width={"100px"} border={"2px solid gray"} color="blue.500" _hover={{bgColor:"blue.400" , color:"white",border:"2px solid blue"}} onClick={handlePlayVideo}>PLAY VIDEO</Button>
</Box>

</Flex>

<Flex marginTop={"100px"} marginLeft="100px">
  <Box>
<Text fontSize={"6xl"} fontWeight="bold" color={"blue.500"}>Client Management</Text>
<Text fontSize={"4xl"} fontWeight="semibold" >Coach More Clients in Less Time</Text>
<Text width={"500px"} marginTop={"10px"} fontSize="xl">· Easily onboard new clients with GOFIT's robust online routine building and distribution system.
· GOFIT's premium exercise library coaches clients during their workout with exercise instructions and HD video demonstrations.
· Limit time spent coaching with advanced analytics, insights, and automated notifications from clients logging their workouts.
· GOFIT's feature-rich in-app messenger makes form reviews or workout plan updates quick and simple.
· Avoid conflicting with geographic based non-compete clauses by expanding your business online.</Text>
<Button marginLeft={"50px"} height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="semibold" width={"300px"} bgColor={"blue.500"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >START EXPLORING</Button>
</Box>


<Box marginTop={"50px"} marginLeft={"100px"} alignItems={"end"}><video  ref={vidRef} width={"92%"}  src="https://www.jefit.com/wp/wp-content/uploads/2020/10/2remind.mov"></video>
<Button marginLeft={"200px"} width={"100px"} border={"2px solid gray"} color="blue.500" _hover={{bgColor:"blue.400" , color:"white",border:"2px solid blue"}} onClick={handlePlayVideo}>PLAY VIDEO</Button>
</Box>

</Flex>



<Flex marginTop={"100px"} marginLeft="100px">
  
<Box marginTop={"50px"} marginLeft={"0px"} alignItems={"end"}><video  ref={vidRef} width={"92%"}  src="https://www.jefit.com/wp/wp-content/uploads/2020/10/2remind.mov"></video>
<Button marginLeft={"250px"} width={"100px"} border={"2px solid gray"} color="blue.500" _hover={{bgColor:"blue.400" , color:"white",border:"2px solid blue"}} onClick={handlePlayVideo}>PLAY VIDEO</Button>
</Box>
  <Box>
<Text fontSize={"6xl"} fontWeight="bold" color={"blue.500"}>
Premium Workout Plans</Text>
<Text fontSize={"4xl"} fontWeight="semibold" >Easily personalize your workout plans</Text>
<Text width={"500px"} marginTop={"10px"} fontSize="xl">JEFIT's extensive exercise library makes updating or personalizing workout plans a breeze.
JEFIT teaches your clients how to perform each exercise with detailed instructions and an HD video mid-workout.
Sell your services as a coach or just sell your premium workout plan - diversify your types of clients.</Text>
<Button marginLeft={"100px"} height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="semibold" width={"300px"} bgColor={"blue.500"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >START EXPLORING</Button>
</Box>



</Flex>

<Flex marginTop={"100px"} marginLeft="100px">
  <Box>
<Text fontSize={"6xl"} fontWeight="bold" color={"blue.500"}>Coach Branding</Text>
<Text fontSize={"4xl"} fontWeight="semibold" >Build a reputation & let new clients come to you.</Text>
<Text width={"500px"} marginTop={"10px"} fontSize="xl">· Be one of the first Coaches on GOFIT and start building your reputation first
· Find time efficient clients as JEFIT users require less coaching than your average client.
· Display your client successes and your certifications on your profile.</Text>
<Button marginLeft={"50px"} height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="semibold" width={"300px"} bgColor={"blue.500"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >START EXPLORING</Button>
</Box>


<Box marginTop={"50px"} marginLeft={"100px"} alignItems={"end"}><video  ref={vidRef} width={"92%"}  src="https://www.jefit.com/wp/wp-content/uploads/2020/10/3profile.mov"></video>
<Button marginLeft={"200px"} width={"100px"} border={"2px solid gray"} color="blue.500" _hover={{bgColor:"blue.400" , color:"white",border:"2px solid blue"}} onClick={handlePlayVideo}>PLAY VIDEO</Button>
</Box>

</Flex>

<Flex marginTop={"100px"}>
<Box><Image marginLeft={"200px"}  width={"45%"} src='https://www.jefit.com/wp/wp-content/uploads/2020/10/coachiphonex-2048x2048.png'/></Box>
<Box>
  <Text fontSize={"6xl"} fontWeight="bold" marginRight={"100px"} width="500px">Start Your Free Trial</Text>
  <Text fontSize={"4xl"} fontWeight="bold" fontStyle={"italic"}>After the free trial,</Text>
  <Text color={"gray"} fontSize="2xl">$19.99/month
You decide what to charge your clients and keep the rest!
For gym or studio, please contact us for bulk pricing at product@jefit.com ​</Text>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="semibold" width={"300px"} bgColor={"blue.500"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >START EXPLORING</Button>
</Box>
</Flex>

<Box margin={"auto"} bgColor={"blue.50"} width="75%" height={"500px"} marginTop="100px">

<Box marginTop={"100px"} textAlign="center"><Text p={"20"}  fontSize={"5xl"} fontWeight="bold" color={"blue.500"} width="75%" textAlign={"center"}>Our Goal Is To Help You Succeed</Text>
<Text>Contact us at product@jefit.com for any questions or feedback</Text>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="semibold" width={"300px"} bgColor={"blue.500"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >START 14-DAY FREE TRAIL</Button>
</Box>

</Box>
<Footer/>

    </div>
  )
}

export default Coach