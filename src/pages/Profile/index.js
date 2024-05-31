import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Clipboard, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { useAuth } from '../../context/AuthContextProvider';
import PkFinderLine from '../Components/pkfinderLine';

export default function Profile() {
  const {logout} = useAuth();
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    email: ''
  })

  const toast = useToast();

  const toastCopy = () => toast.show("Copiado para área de transferência");


  useEffect(()=>{
    const userdata = async () => {
      const data = JSON.parse(await AsyncStorage.getItem('@userData'))
      setUserData(data)
    }

    userdata()
  }, [])

  return (
    <View style={styles.container}>
      <PkFinderLine/>
      <View style={styles.content}>
        <Text style={styles.title}>Detalhes da conta</Text>
        <View style={styles.data}>
          <View style={styles.viewSubTitle}>
            <Text style={styles.subtitle}>Dados</Text>
          </View>
          <View style={styles.contentDatas}>
              <View style={styles.containerInformation}>
                <View style={styles.information}>
                  <Text style={styles.textTitle}>ID:</Text>
                  <TouchableOpacity onPress={() =>{ 
                    toastCopy()
                    Clipboard.setString(userData.id)
                  }}>
                  <Text style={styles.text}>{userData.id}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            <View style={styles.containerInformation}>
              <View style={styles.information}>
                <Text style={styles.textTitle}>Username:</Text>
                <TouchableOpacity onPress={() =>{ 
                    toastCopy()
                    Clipboard.setString(userData.username)
                  }}>
                  <Text style={styles.text}>{userData.username}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.containerInformation}>
              <View style={styles.information}>
                <Text style={styles.textTitle}>Email:</Text>
                <TouchableOpacity onPress={() =>{ 
                    toastCopy()
                    Clipboard.setString(userData.email)
                  }}>
                  <Text style={styles.text}>{userData.email}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.disconnect} onPress={logout}>
          <Text style={styles.text}>Desconectar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    justifyContent: 'space-between',
  },
  content:{
    flex:1,
    alignItems: 'center',
    paddingHorizontal:20,
    marginTop:40,
    gap:20
  },
  data:{
    width: '100%',
    borderStyle: 'solid',
    borderColor: '#DADADA',
    borderWidth:1,
    borderRadius:12
  },
  contentDatas:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    gap: 15
  },
  title:{
    fontSize:33,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#A7A6A6'
  },
  subtitle:{
    color: '#000000',
    fontSize:22,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  text:{
    fontFamily: 'Roboto',
    fontSize:18,
    color: '#fff'
  },
  textTitle:{
    fontFamily: 'Roboto',
    fontSize:18,
    color: '#fff',
    fontWeight:'bold'
  },
  viewSubTitle:{
    alignItems:'center',
    padding:5,
    backgroundColor: '#DADADA',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  containerInformation:{
    justifyContent: 'space-between',
    alignItems:'center',
    flexDirection:'row',
    width:'100%'
  },
  information:{
    flexDirection:'row',
    maxWidth:'85%',
    gap:5
  },
  disconnect:{
    width:'100%',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:20,
    borderStyle:'solid',
    borderColor:'#DADADA',
    borderWidth:1,
    borderRadius:12,
  }
})