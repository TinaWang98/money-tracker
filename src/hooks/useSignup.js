import { useState, useEffect } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [isCanclled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const {dispatch} = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try{
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email,password)


            if(!res){
                throw new Error('could not complete signup')
            } 

            //add dispaly nae to user
            await res.user.updateProfile({ displayName: displayName})

            //dispatch login action
            dispatch({type:'LOG_IN', payload:res.user})

            if(!isCanclled){
                setIsPending(false)
                setError(null)
            }
        }catch (err) {
            if(!isCanclled){
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }

    }
    useEffect(() => {
        return () => setIsCancelled(true)
    },[])

    return { error, isPending, signup }

}