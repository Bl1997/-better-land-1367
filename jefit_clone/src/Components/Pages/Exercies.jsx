import React from 'react'
import { Box,Text,Image, Select } from '@chakra-ui/react'
import Choose from './Choose'
const Exercies = () => {
  return (
    <div>

<Box><Text marginTop={"50px"} textAlign={"center"} fontSize={"3xl"} fontWeight="semibold">GOFIT Exercise Database</Text></Box>
  <Text textAlign={'center'} marginTop={"20px"} fontSize="2xl">Exercises By Muscle Group</Text>
  <Text textAlign={'center'} marginTop={"20px"} fontSize="2xl" color={"gray"} fontWeight="light">Find exercises that work out the muscle groups you're targeting.</Text>

<Box marginTop={"20px"} ><Image marginLeft={"300px"} justifyContent={"center"} alignContent="center" src='https://www.androidb.com/wp-content/uploads/2015/12/jefit-exercises.png'/></Box>

<Choose/>


    </div>
  )
}

export default Exercies