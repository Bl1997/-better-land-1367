
  import { useContext } from 'react';
  import { useState } from 'react';
  import {Text,Box, Flex, Spacer} from "@chakra-ui/react"
  import { Link } from 'react-router-dom';
  
   
    
    export default function Login() {
     
  
   
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
  
  
  
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  
  const handlePass=(e)=>{
    setPassword(e.target.value)
  }
  
     const handleSubmit=(e)=>{
     e.preventDefault()
  
    fetch("http://localhost:3000/users",{
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body :JSON.stringify({email,password})
    }).then((res)=>res.json())
       .then((res)=>{
        if(res.token){
          localStorage.setItem("token",JSON.stringify(res.token))
        }
       })
    }
  
      return (
      <>
      <Box marginTop={"35px"} marginLeft={"400px"} justifyContent={"space-around"} textAlign={"center"}  shadow="2xl" width={"30%"} height="400px" borderRadius={"15"}>
        <Flex><Text fontSize={"3xl"} fontWeight={"bold"} color="teal.700" borderBottom={"2px solid teal"}>Log In</Text>
        <Spacer/>
        <Text fontSize={"3xl"} fontWeight={"bold"}  color={"lightblue"}>Register</Text>
        </Flex>
      
       <form onSubmit={handleSubmit}>
 
  
    <input type="email" placeholder='Enter Email' value={email} onChange={handleEmail}style={{borderBottom:"2px solid darkblue ", width:"270px",marginTop:"20px",height:"35px"}} /><br />
  
   <input type="password" placeholder='enter Password' value={password} onChange={handlePass}style={{borderBottom:"2px solid darkblue ", width:"270px",marginTop:"20px",height:"35px"}} /><br />
   <Text >Need an account?<Text fontSize={"xl"} fontWeight="semibold"><Link to="/register">Sign Up</Link></Text></Text>
   <input type="submit" value="LOGIN" style={{color:"teal" , backgroundColor:"pink",fontSize:"large",width:"120px",borderRadius:"10px",marginTop:"40px", fontWeight:"bold",height:"35px",cursor:"pointer"}}/>
       </form>
     
       </Box>
      </>
      )
    }
  