import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState } from 'react';
import api from '../services/api';
import * as auth from '../services/auth';
import { testToken } from '../services/testToken';
import * as Updates from 'expo-updates';

export const AuthContext = createContext({})

export const AuthContextProvider =  ({children}) => {
  const [signed, setSigned] = useState();
  const [checkAuth, setcheckAutC] = useState(false);
  const [loading, setLoading] = useState(true);
  const [internalLoading, setIntenarlLoading] = useState(false);

  async function checkAuthentication(){
    setLoading(true)

    const access_token = await AsyncStorage.getItem('@access_token');
    const userData = JSON.parse(await AsyncStorage.getItem('@userData'));

    if(!userData || !access_token){
      setcheckAutC(true)
      setTimeout(()=> setLoading(false), 1500)
      return
    }
    
    api.defaults.headers.Authorization = `Bearer ${access_token}`;

    const access = await testToken(userData.id)
  
    if(access) setSigned(true)
    
    setcheckAutC(true)
    setLoading(false)
  }

  async function signIn(loginData) {
    setLoading(true);
    
    const response = await auth.signIn(loginData);
    if(response.error){
      setLoading(false);
      setSigned(false);
      return
    } 

    const {access_token} = response;
    const userData = {
      id: response.id,
      username: response.username,
      email: response.email
    }

    await AsyncStorage.setItem('@access_token', access_token)
    await AsyncStorage.setItem('@userData', JSON.stringify(userData))
   
    setSigned(true);
    
    api.defaults.headers.Authorization = `Bearer ${access_token}`;
    
    setLoading(false);
  }

  async function logout(){
    await AsyncStorage.removeItem('@access_token');
    await AsyncStorage.removeItem('@userData');

    setSigned(undefined);
    await Updates.reloadAsync()
  }

  return (
    <AuthContext.Provider value={{checkAuth, checkAuthentication, signed: signed, signIn,logout, loading, internalLoading,setIntenarlLoading}}>
    {children}
   </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
