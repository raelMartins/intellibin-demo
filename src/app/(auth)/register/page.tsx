import React from 'react'
import Image from 'next/image'
import Form from "./form"

const Register = () => {
  return (
    <div>
        <div>
       <Form/>
        <div>
            <Image src="/images/Intellibin_Logo Main.png" alt="login" width={500} height={500} />
        </div>
        </div>
        
    </div>
  )
}

export default Register