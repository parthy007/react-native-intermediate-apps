import React, { useContext, useEffect, useState } from 'react'
import {NavigationContainer} from "@react-navigation/native"
import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import Loading from '../components/Loading'
import { AppwriteContext } from '../appwrite/AppwriteContext'


export default function Router() {
    
    const {appwrite,isLoggedIn,setIsLoggedIn} = useContext(AppwriteContext)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(()=>{
        appwrite.getCurrentUser()
        .then( res => {
            setIsLoading(false);
            if(res){
                setIsLoggedIn(true)
            }
        })
        .catch(_=>{
            setIsLoading(false)
            setIsLoggedIn(false)
        })
    },[setIsLoading,appwrite])

    if(isLoading){
        return <Loading/>        
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}