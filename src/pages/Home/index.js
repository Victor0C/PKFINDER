import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import cards from './cards';
import PkFinderLine from '../Components/pkfinderLine'

export default function Home({navigation}) {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={'#0E0E0E'}/>
      <PkFinderLine/>
      <View style={styles.options}>

        {cards.map((item)=>(
            <View style={styles.card} key={item.name}>
              <TouchableOpacity onPress={()=> navigation.navigate('Search', { typeInput: item.type, subtitle: item.subtitle } )}>
                <Image style={styles.imageCard} source={item.source}/>
              </TouchableOpacity>
              <Text style={styles.text}>{item.name}</Text>
            </View> 
          ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto'
  },
  logo:{
    width:320,
    height:100,
    marginRight:12
  },
  options:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row',
    gap:20,
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop:70,
    marginBottom: 40,
  },
  card:{
    alignItems:'center',
    gap:6,
    width:84,
    height:100
  },
  imageCard:{
    width:60,
    height:60
  }
})