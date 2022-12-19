import React from 'react'
import { Box,Flex,Text,Image, Button } from "@chakra-ui/react"

import Footer from './Footer'

const Home = () => {
  return (
    <div>
   
  
   <Box bgColor={"blue.600"} width="100%" height={"1000px"}>
    <Flex gap={"20"}>
<Box>
 
   <Box  margin={"20"}>
    <Text color="white" fontSize={"6xl"} fontWeight="bold" width={"170%"} >
MANAGE & TRACK
ALL YOUR WORKOUTS
IN ONE PLACE</Text>
<Text color={"white"} fontSize="3xl" fontStyle="italic" width={"170%"}  fontWeight="semibold">#1 Popular Workout Tracking Platform
Stay Strong Together</Text>
   </Box>
   <Flex >
<Box margin={"10"}>
  <Box margin={"5"}><Image borderRadius={"15"} width={"250px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"></Image></Box>
  <Box margin={"5"}><Image borderRadius={"15"} width={"250px"} src='data:image/png;base64,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'></Image></Box>
</Box>
<Box margin={"5"} color="white" fontWeight={"bold"} textAlign="center"><Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiL5szkHMqX962lZPE3a19CYRWeh4ofacing&usqp=CAU'></Image>Scan To Download</Box>
</Flex>

<Flex marginLeft={"100px"} gap={"10"}>
  <Image width={"30px"} borderRadius="10" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Al4MiZQj2lddxldLrLq5I9cCm7JGVHWxOA&usqp=CAU'></Image>
  <Image borderRadius={"20"} width="30px" src=
  "data:image/png;base64,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"></Image>
  <Image width={"30px"} borderRadius="20" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4drmsPVPNrjsx-BLQehjRSFxq_py4glqjXw&usqp=CAU'></Image>
</Flex>



</Box>

<Box marginTop={"200px"} marginLeft="80px"> <Image width={"100%"} src='https://www.jefit.com/wp/wp-content/uploads/2022/03/website_hero_watch-2048x1707.webp'></Image> </Box>
</Flex>



   </Box>

<Box marginTop={"50px"}>
  <Text textAlign={"center"} fontSize={"4xl"} fontWeight="bold">CONNECT WITH OVER 10 MILLION JEFIT MEMBERS</Text>
</Box>
<Box><Text color={"grey"} textAlign={"center"} fontSize="3xl" fontWeight={"semibold"}>As the most active workout community, we invite you and your friends to join us and support each other.</Text></Box>

<Flex gap={"2"}  alignItems="center" justifyContent={"space-around"}>

  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/14members-150x150.png.webp'></Image>
  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/20members-150x150.png.webp'></Image>
  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/18members-150x150.png.webp'></Image>
  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/10members-150x150.png.webp'></Image>
  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/17members-150x150.png.webp'></Image>
  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/7members-150x150.png.webp'></Image>
  <Image borderRadius="10" src='https://www.jefit.com/wp/wp-content/uploads/2021/11/16members-150x150.png.webp'></Image>
 
</Flex>

<Flex gap={"10"} justifyContent="center" margin={"5"}>
  <Button  height={'60px'}  fontSize={"xl"} fontWeight="bold" width={"250px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >TREDING TOPECS</Button>
  <Button  height={'60px'} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >JOIN NOW</Button>
  

</Flex>

 <Box marginTop={"100px"}><Text textAlign={"center"} Spacer={"5"} fontSize="5xl" fontWeight={"bold"}>GOFIT COVERS ALL OF YOUR WORKOUT NEEDS</Text></Box>


 <Flex marginTop={"100px"}>

<Box><Image width={"80%"} src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web1.png'></Image></Box>
<Box marginRight={"250px"} width="60%">

 <Box> <Text color={"teal"} width="200%">WORKOUT TRACKING</Text></Box>
 <Text  fontSize={"4xl" } fontWeight="bold">PERSONALIZE YOUR WORKOUT PLANS</Text>
 <Box><Text fontSize={"xl"} fontWeight="semibold">1. 
1400+ exercises with instructions</Text></Box>
<Text fontSize={"xl"} fontWeight="semibold">2. Pro-designed workout plans</Text>
<Text fontSize={"xl"} fontWeight="semibold">3. Support custom exercises</Text>
<Text fontSize={"xl"} fontWeight="semibold">4. Flexible workout planning tool</Text>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >JOIN NOW</Button>
</Box>
 </Flex>


<Flex marginTop={"100px"} marginLeft="100px" gap={"200"}>
<Box>
<Box> <Text color={"teal"} width="200%">SMART WATCH INTEGRATION</Text></Box>
 <Text  fontSize={"4xl" } fontWeight="bold">TRAIN & LOG SEAMLESSLY IN GYM AND HOME</Text>
 <Box><Text fontSize={"xl"} fontWeight="semibold">1. 
 Log training with one-click</Text></Box>
<Text fontSize={"xl"} fontWeight="semibold">2. Control rest time easily</Text>
<Text fontSize={"xl"} fontWeight="semibold">3.Available on mobile and watch</Text>
<Text fontSize={"xl"} fontWeight="semibold">4. Audio and video instructions</Text>
<Button height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >JOIN NOW</Button>
</Box>

<Box><Image width={"90%"} src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web2.png'/></Box>

</Flex>
<Flex marginTop={"100px"}>

<Box><Image width={"80%"} src='https://www.jefit.com/wp/wp-content/uploads/2022/08/web3.png'></Image></Box>
<Box marginRight={"250px"} width="60%">

 <Box> <Text color={"teal"} width="200%">PROGRESS TRACKING</Text></Box>
 <Text  fontSize={"4xl" } fontWeight="bold">VIEW PROGRESS & REACH NEW LIMITS</Text>
 <Box><Text fontSize={"xl"} fontWeight="semibold">1. 
1400+ Track workout time and weightlifting</Text></Box>
<Text fontSize={"xl"} fontWeight="semibold">2. Set target muscles and body measurements</Text>
<Text fontSize={"xl"} fontWeight="semibold">3. Understand muscle recovery rate</Text>
<Text fontSize={"xl"} fontWeight="semibold">4. Set 1RM goals and refresh records</Text>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >JOIN NOW</Button>
</Box>
 </Flex>
 


 <Box marginTop={"100px"}><Text textAlign={"center"} fontSize="5xl" fontWeight={"bold"}>PLANS THAT SUIT YOU BEST</Text></Box>

 <Flex gridColumnGap={"20"} justifyContent="space-around" marginTop={"100px"}>


 <Box bgColor={"gray.700" } textAlign="center" borderRadius={"10px"}>
<Text textAlign={"center"} fontSize="4xl" fontWeight={"bold"} color="white">FREE</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Basic</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Ads supported</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Flexible workout planner</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Top-notch log tracker</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>1400+ exercises library</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Body stats tracking tools</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Support interval training</Text>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >FREE DOWNLOAD</Button>

</Box>

<Box bgColor={"gray.700" } textAlign="center" borderRadius={"10px"}>
<Text textAlign={"center"} fontSize="4xl" fontWeight={"bold"} color="white">Elite
Monthly</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>$12.99/month</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>All BASIC plan features No ads</Text>

<Text color={"white"} fontSize="x-large" padding={"3"}>Comprehensive training reports</Text>

<Text color={"white"} fontSize="x-large" padding={"3"}>Advanced tracking features</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Compare records with friends</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Exercise tips from JEFIT experts</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Premium workout plans</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>More...</Text>

<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >LEARN MORE</Button>
<Text color={"white"} fontSize="x-large" padding={"3"}><Text color={"teal"} fontSize="x-large" padding={"3"}>$12.99 billed / month</Text></Text>

</Box>


<Box bgColor={"gray.700" } textAlign="center" borderRadius={"10px"}>
<Text textAlign={"center"} fontSize="4xl" fontWeight={"bold"} color="white">Elite
Yearly</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>$5.83/month</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>All BASIC plan features
No ads</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Comprehensive training reports</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Advanced tracking features</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Compare records with friends</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Exercise tips from JEFIT experts</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>Premium workout plans</Text>
<Text color={"white"} fontSize="x-large" padding={"3"}>More...</Text>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"200px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >LEARN MORE</Button>
<Text color={"teal"} fontSize="x-large" padding={"3"}><Text color={"teal"} fontSize="x-large" padding={"3"}>Save 55%, $69.99 billed / year</Text></Text>

</Box>

 </Flex>

 <Box marginTop={"150px"}><Text fontSize={"5xl"} fontWeight="bold" textAlign={"center"}>WANT TO BUILD YOUR OWN WORKOUT PLAN?</Text></Box>
<Text textAlign={"center"} fontSize="2xl" fontWeight={"semibold"}>Customize your workout plan with over 3000 free exercises in Jefit Workout Plan Builder. And easily share with friends.</Text>
<Box  textAlign={"center"}>
<Button  height={'60px'} marginTop={"25px"} fontSize={"xl"} fontWeight="bold" width={"300px"} borderRadius={"25"} bgColor={"blue.400"} color="white" border="2px solid" _hover={{bgColor:"white" ,color:"blue.500"}} >CREATE WORKOUT PALN</Button>
</Box>
<Footer/>
    </div>
  )
}

export default Home