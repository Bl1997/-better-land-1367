import React from 'react'
import { Box ,Flex,Text,Button,Image} from "@chakra-ui/react"
import Footer from './Footer'
const Elite = () => {
  return (
    <div>

<Box  p={"2"} textAlign={"center"} marginTop={"80px"} width={"100%"} height="80px" bgColor={"red.600"}>
  <Text color={"white"} fontSize="2xl" fontWeight={"semibold"}>Year End - 10% Off</Text>
  <Text color={"white"} fontWeight="semibold">57 days 4 hours left</Text>


</Box>
<Text marginTop={"15px"} textAlign={"center"} fontSize={"2xl"} fontWeight="semibold" color={"gray.600"}>Plans that suit you best</Text>

<Flex justifyContent={"space-around"} marginTop="50px">

  <Box p={"5"} width={"300px"}  shadow={"dark-lg"} borderRadius="10" > <Text fontSize={"2xl"}  fontWeigh="semibold" color={"gray.600"}>Basic</Text>
  
  <Text color={"gray.400"}>Freeads supported</Text>
  <Text fontSize={"xl"} color={"gray.500"}>Flexible workout planner
Top-notch log tracker
1400+ exercises library
Body stats tracking tools
Support interval training</Text>
<Button marginTop={"10px"} alignItems={"center"} bgColor={"gray.600"} color="white" >Free Download</Button>
    </Box>

    
  <Box  shadow={"dark-lg"} borderRadius="10" p={"5"} width={"300px"}> <Text fontSize={"2xl"} fontWeigh="semibold" color={"gray.600"}>Elite Monthly</Text>
  
  <Text color={"gray.400"}>$12.99per month</Text>
  <Text fontSize={"xl"} color={"gray.500"}>All BASIC plan features
No ads
Comprehensive training reports
Advanced tracking features
Compare records with friends
Exercise tips from JEFIT experts
Premium workout plans
More...</Text>
<Button width={"200px"} marginTop={"10px"} alignItems={"center"} bgColor={"gray.600"} color="white" >Get Elite Now</Button>
<Text textAlign={"center"} color={"gray"}>$ 12.99 billed / month</Text>
    </Box>

    
  <Box  width={"320px"}  shadow={"dark-lg"} borderRadius="10">
    
    <Box p={"2"} height={"40px"} bgColor="red.500"><Text color={"white"} fontWeight="bold" textAlign={"center"}>Year End - Save 60%</Text></Box>
     <Text p={"5"} fontSize={"2xl"} fontWeigh="semibold" color={"gray.600"}>Elite Yearly</Text>
  
  <Text p={"2"} color={"gray.400"}>$5.83 $5.25 per month</Text>
  <Text p={"5"} fontSize={"xl"} color={"gray.500"}>All BASIC plan features
No ads
Comprehensive training reports
Advanced tracking features
Compare records with friends
Exercise tips from JEFIT experts
Premium workout plans
More...</Text>
<Text marginLeft={"70px"} color={"red.400"}>Save 
 60%</Text>

 <Button marginLeft={"60px"} p={"6"} width={"200px"} marginTop={"10px"} justifyItems="center" bgColor={"red.500"} color="white" borderRadius={"25"} >GET ELITE NOW</Button>
<Text textAlign={"center"}  color={"gray"}>$ 62.99 billed / year</Text>
    </Box>
</Flex>

<Box p={"2"}  marginTop={"100px"} width={"50%"} bgColor="red.600" height={"60px"} marginLeft="300px" borderRadius={"5"} ><Text textAlign={"center"} fontSize={"3xl"} color="white">SEND GOFIT ELITE MEMBERSHIP AS GIFT</Text></Box>

<Flex justifyContent={"space-around"}>
<Box marginLeft={"50px"}>
  <Image  width={"70%"}  src='https://www.jefit.com/images/elite/webf_1.png'/>
  <Text fontSize={"2xl"}>Expert Crafted Workouts</Text>
  <Text fontSize={'small'} width="70%">Access to our premium plans. From strengthtraining to bodywight workout</Text>
</Box>


<Box>
  <Image width={"70%"} src='https://www.jefit.com/images/elite/webf_2.png'/>
  <Text fontSize={"2xl"}>HD Video Guides</Text>
  <Text width="70%" fontSize={'small'}>Never worry about what exercise to do or how to get the perfect form.</Text>
</Box>

<Box>
  <Image  width={"70%"}  src='https://www.jefit.com/images/elite/webf_3.png'/>
  <Text fontSize={"2xl"}>Progress Reports</Text>
  <Text width="70%" fontSize={'small'}>Get weekly reports on progress and see how you're progressing </Text>
</Box>
</Flex>

<Box marginTop={"50px"} bgColor={"blue.400"} width="70%" height={"250px"} marginLeft="200px">
<Text fontSize={"5xl"} textAlign="center" color={"white"} fontWeight="semibold">Also unlock these features with Elite</Text>

<Flex  marginTop="15px" justifyContent={"space-around"}>
 <Box><Image src='https://www.jefit.com/images/elite/badge_2.png'/><Text color={"white"} fontSize="xl">Cloud Backup</Text></Box> 
 <Box>  <Image src='https://www.jefit.com/images/elite/badge_1.png'/><Text color={"white"} fontSize="xl">Favorite Routins</Text></Box> 
 <Box>  <Image src='https://www.jefit.com/images/elite/badge_3.png'/><Text color={"white"} fontSize="xl">No  Ads</Text></Box> 
 <Box>  <Image src='https://www.jefit.com/images/elite/badge_4.png'/><Text color={"white"} fontSize="xl">Charts & Analytics</Text></Box> 
 <Box>  <Image src='https://www.jefit.com/images/elite/badge_6.png'/><Text color={"white"} fontSize="xl">Web App</Text></Box> 
 <Box> <Image src='https://www.jefit.com/images/elite/badge_5.png'/><Text color={"white"} fontSize="xl">Other Tools</Text></Box> 

</Flex>
</Box>
<Box  width="70%" height={"100px"} marginLeft="200px">
<Image width={"100%"} height="260px" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16qkDE8FeVc6bdQuU4qZjMmacVPHYKj9YgQ&usqp=CAU'/>
</Box>
<Box marginTop="200px"></Box>
<Footer />

    </div>
  )
}

export default Elite