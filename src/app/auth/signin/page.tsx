"use client"
import React from 'react'
import { signIn } from 'next-auth/react'

const LoginPage = () => {

    const onSubmitGoogle = async ()=>{
        const result = await signIn("google",{
            redirect:true,
            callbackUrl:"/"
        })
    }
    const onSubmitGitHub = async ()=>{
        const result = await signIn("github",{
            redirect:true,
            callbackUrl:"/"
        })
    }

  return (
    <div className='flex flex-col'>
        <button onClick={onSubmitGoogle}>Login with google</button>
        <button onClick={onSubmitGitHub}>Login with github</button>
    </div>
    
  )
}

export default LoginPage