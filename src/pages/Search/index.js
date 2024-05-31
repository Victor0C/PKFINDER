import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import PkFinderLine from '../Components/pkfinderLine';
import databases from './databases';
import {typeInputQuery, validInputQuery} from "./typeInputQuery";
import { useAuth } from "../../context/AuthContextProvider";

export default function Search({route, navigation}) {
  const [valueInput, setValueInput] = useState("");
  const [possibleDatabases, setPossibleDatabases] = useState([]);
  const [selected, setSelected] = useState('');
  const [isValid, setValid] = useState();
  const [selectedDatabase, setSelectedDatabase] = useState()
  const [pressButton, SetPressButton] = useState(false)
  const {typeInput, subtitle} = route.params;
  
  const {setIntenarlLoading} = useAuth()

  useEffect(
    ()=>{
      const bases = databases.filter((database) => database.queryOption.includes(typeInput));
      setPossibleDatabases(bases);
    }
  ,[]);

  useEffect(()=>{
    if(isValid){
      navigation.navigate('ViewDataPeople', {queryOption: {dataBase: selectedDatabase, typeData: typeInput, researchData: valueInput}});
      setIntenarlLoading(true)
    } 
  }, [pressButton]);


  const handleSelection = (value) => {
    if (value !== selected) setSelected(value);
    setSelectedDatabase(possibleDatabases.find(dataBase => dataBase.key == value).value)
  }

  const navigate = () =>{
    setValid(validInputQuery(valueInput, typeInput));
    SetPressButton(!pressButton);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent />
      <PkFinderLine/>
      <View style={styles.viewMain}>
        <Text style={styles.instruction}>Digite {subtitle} para encontrar:</Text>
        <View style={styles.myView}>
          <View>
            {
              typeInputQuery(typeInput, valueInput, setValueInput, isValid)
            }
            { isValid == false && <Text style={styles.textError}>Dado inválido</Text>}
          </View>
          <View style={styles.myView}>
            <SelectList 
              setSelected={handleSelection}
              data={possibleDatabases} 
              defaultOption={possibleDatabases[0]}
              save="key"
              boxStyles={styles.boxStyles}
              inputStyles={styles.inputStyles}
              dropdownStyles={styles.dropdownStyles}
              notFoundText='Nenhuma base encontrada'
              placeholder={possibleDatabases.length == 0 && 'Nenhuma base disponível'}
              searchPlaceholder='Buscar base de dados'
              arrowicon = {false}
              maxHeight={170}
              />
            <TouchableOpacity style={styles.button} onPress={navigate}>
              <LinearGradient colors={['#A6A6A6', '#404040']} locations={[0, 0.5]} style={styles.gradient}>
                <Text style={styles.textButton}>Buscar</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0E0E",
  },
  instruction: {
    color: "#FFFFFF",
    fontFamily: 'Roboto',
    fontSize: 23
  },
  viewMain:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:80,
    gap: 30
  },
  myView:{
    gap:15
  },
  input: {
    width:323,
    height:46,
    borderRadius: 31,
    backgroundColor: '#F6F6F6',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    fontFamily: 'Roboto'
  },
  button:{
    width:323,
    height:46,
  },
  textButton: {
    color: "#FFFFFF",
    fontFamily: 'Roboto',
    fontSize:16
  },
  gradient:{
    width:'100%',
    height:'100%',
    borderRadius: 31,
    justifyContent: 'center',
    alignItems:'center'
  },
  boxStyles:{
    width:323,
    height:46,
    borderRadius: 31,
    backgroundColor: '#F6F6F6',
    justifyContent:'center',
  },
  inputStyles:{
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  dropdownStyles:{ 
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
  },
  textError:{
    color: "#C90000",
    fontFamily: 'Roboto',
    fontSize:12,
    alignSelf:'center',
  }
});
