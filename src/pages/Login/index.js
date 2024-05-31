import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, TextInput, View,StatusBar } from "react-native";
import { useAuth } from "../../context/AuthContextProvider";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const { signIn, signed} = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async () => await signIn({email, password});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
        <Image style={styles.image} source={require('../../assets/logo.png')} />
      <View style={styles.view}>

        { signed===false && (<Text style={styles.textError}>Acesso negado.</Text>)}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(text)=> setEmail(text)}/>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}/>
          
        <TouchableOpacity style={styles.button} onPress={handleLogin} >
        <LinearGradient colors={['#A6A6A6', '#404040']} locations={[0, 0.5]} style={styles.gradient}>
          <Text style={styles.text}>Acessar</Text>
        </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0E0E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: 'Roboto'
  },
  textError: {
    color: "#C90000",
    fontFamily: 'Roboto',
    textAlign: 'center',
    marginBottom:20
  },
  input: {
    width:323,
    height:45,
    borderRadius: 31,
    backgroundColor: '#F6F6F6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    fontFamily: 'Roboto',
    textAlign:'center'
  },
  view:{
    gap:15
  },
  image:{
    marginBottom: 28
  },
  button:{
    width:323,
    height:45,
  },
  gradient:{
    width:'100%',
    height:'100%',
    borderRadius: 31,
    justifyContent: 'center',
    alignItems:'center'
  }
});
