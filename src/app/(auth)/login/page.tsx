import React from 'react'
import Form from './form'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
      <div className="flex justify-center items-center h-screen overflow-hidden ">
    <div className="mx-4 w-1/2 flex  justify-center items-center h-screen">
      <Form /> 
    </div>
    <div className=" w-1/2  flex justify-center items-center h-screen bg-intellibin-primaryBackground">   
      <Image src="/images/Intellibin_Logo Main.png" alt="login" width={250} height={250} />
    </div>
  </div>
  
    
  
  )
}

export default Login