import React from "react";
import { StyleSheet,TextInput } from "react-native";
import { TextInputMask } from 'react-native-masked-text';
import { validate } from "react-native-web/dist/cjs/exports/StyleSheet/validate";


function removeSpecialCharacters(text) {
    const tableReplacement = {
        'á': 'a', 'à': 'a', 'ã': 'a', 'â': 'a', 'Á': 'A', 'À': 'A', 'Ã': 'A', 
        'Â': 'A','é': 'e', 'è': 'e', 'ê': 'e', 'É': 'E', 'È': 'E', 'Ê': 'E',
        'í': 'i', 'ì': 'i', 'î': 'i', 'Í': 'I', 'Ì': 'I', 'Î': 'I','ó': 'o',
        'ò': 'o', 'õ': 'o', 'ô': 'o', 'Ó': 'O', 'Ò': 'O', 'Õ': 'O','Ô': 'O',
        'ú': 'u', 'ù': 'u', 'û': 'u', 'Ú': 'U', 'Ù': 'U', 'Û': 'U','ç': 'c', 
        'Ç': 'C'
      };

    const newText = text.replace(/[^\x00-\x7F]/g, (caracter) => tableReplacement[caracter] || caracter);

    return newText.replace(/[()/.-]/g, '')
}

export function typeInputQuery(type, valueInput, setValueInput, isValid){
    if (type === 'cpf'){
      return (
        <TextInputMask 
            style={isValid == false? styles.inputError : styles.input}
            type={'cpf'}
            placeholder="000-000-000-00"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(removeSpecialCharacters(text))}/>
        )
    }

    if (type === 'name'){
      return (
        <TextInput
            style={styles.input}
            placeholder="Nome"
            value={valueInput}
            onChangeText={text => setValueInput(text)}/>
        )
    }

    if (type === 'birth'){
      return (
        <TextInputMask 
            style={styles.input}
            type={'custom'}
            options={{
                mask:'99/99/9999'
            }}
            placeholder="00/00/0000"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(removeSpecialCharacters(text))}/>
        )
    }

    if (type === 'tell'){
      return (
        <TextInputMask 
            style={styles.input}
            type={'cel-phone'}
            placeholder="(00) 00000-0000"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(removeSpecialCharacters(text).replace(/\s/g, ""))}/>
        )
    }

    if (type === 'cep'){
      return (
        <TextInputMask 
            style={styles.input}
            type={'custom'}
            options={{
                mask:'99.999-999'
            }}
            placeholder="00.000-000"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(removeSpecialCharacters(text))}/>
        )
    }

    if (type === 'rg'){
      return (
        <TextInputMask 
            style={styles.input}
            type={'custom'}
            options={{
                mask:'99.999.999-9'
            }}
            placeholder="00.000.000-0"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(removeSpecialCharacters(text))}/>
        )
    }

    if (type === 'mother'){
      return (
        <TextInput
            style={styles.input}
            placeholder="Nome da mãe"
            value={valueInput}
            onChangeText={text => setValueInput(text)}/>
        )
    }

    if (type === 'email'){
      return (
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={valueInput}
            onChangeText={text => setValueInput(text)}/>
        )
    }

    if (type === 'cnh'){
      return (
        <TextInputMask 
            style={styles.input}
            type={'custom'}
            options={{
                mask:'99999999999'
            }}
            placeholder="00000000000"
            keyboardType="numeric"
            value={valueInput}
            onChangeText={text => setValueInput(removeSpecialCharacters(text))}/>
        )
    }

}

export function validInputQuery(value, type){
    if (type === 'cpf'){
        return value.length == 11
      }
  
      if (type === 'name'){
        return value.length != 0
      }
  
      if (type === 'birth'){
        return value.length == 8
      }
  
      if (type === 'tell'){
        return value.length == 11
      }
  
      if (type === 'cep'){
        return value.length == 8
      }
  
      if (type === 'rg'){
        return value.length == 9 
      }
  
      if (type === 'mother'){
        return value.length != 0
      }
  
      if (type === 'email'){
        return value.length != 0
      }
  
      if (type === 'cnh'){
        return value.length == 11
      }
  
}

const styles = StyleSheet.create({
    input: {
        textAlign:'center',
        width:323,
        height:45,
        borderRadius: 31,
        backgroundColor: '#F6F6F6',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight:20,
        fontFamily: 'Roboto',
    },
    inputError:{
        textAlign:'center',
        width:323,
        height:45,
        borderRadius: 31,
        backgroundColor: '#F6F6F6',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 20,
        paddingRight:20,
        fontFamily: 'Roboto',
        borderColor: '#C90000',
        borderWidth:1.4,
    }
});
  