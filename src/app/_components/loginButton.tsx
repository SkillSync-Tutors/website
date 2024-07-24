"use client"
import {signIn, signOut, useSession} from 'next-auth/react'
import React from 'react'

const LoginButton = () => {
    const { data: session} = useSession();
    return (
        <div>
            {session?.user ? (
                <div>
                    <p>
                        {session.user.name}
                    </p>
                    <button onClick={() => signOut()}>
                        Sign Out
                    </button>
                </div>
            ):(
                <button onClick={() => signIn()}>
                    Sign In
                </button>
            )}
        </div>
    );
}

export default LoginButton;