import React from 'react'
import Form from './form'
import Image from 'next/image'

const Login = () => {
  return (
    <div className='flex flex-col'>
        <div>
        <Form/>
        <div>
            <Image src="/images/Intellibin_Logo Main.png" alt="login" width={500} height={500} />

        </div>
        </div>
        
    </div>
  )
}

export default Login