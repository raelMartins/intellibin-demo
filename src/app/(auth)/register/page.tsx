
import React from 'react'
import Image from 'next/image'
// import Form from "./form"
import Form from "./form"

const Register = () => {
  return (
    <div className="flex justify-center items-center max-h-screen">
    <div className="mx-4 w-1/2 flex justify-center items-center max-h-3/4">
      <Form /> 
    </div>
    <div className="mx-4 w-1/2 flex justify-center items-center h-screen bg-intellibin-primaryBackground">
      <Image src="/images/Intellibin_Logo Main.png" alt="login" width={250} height={250} />
    </div>
  </div>
  
  )
}

export default Register