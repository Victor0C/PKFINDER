import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function PkFinderLine(){
    return(
        <Image style={styles.logo} source={require('../../assets/pkfinderLine.png')} />
    )
}

const styles = StyleSheet.create({
    logo:{
      width: 320,
      height: 100,
      marginTop: 50,
      marginRight: 12,
      alignSelf: 'center',
    },
  })