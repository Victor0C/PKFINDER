import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Clipboard, TouchableOpacity} from "react-native";
import { useAuth } from "../../../context/AuthContextProvider";
import queriesController from "../../../services/queries";
import PkFinderLine from "../../Components/pkfinderLine";
import Loading from "../../Loading";
import { useToast } from "react-native-toast-notifications";


export default function ViewDataPeople({route}){
    const {queryOption} = route.params;
    const [queryResult, setQueryResult] = useState([])
    const [error, setError] = useState(false)
    const {internalLoading, setIntenarlLoading} = useAuth()

    const toast = useToast();

    const toastCopy = () => toast.show("Copiado para área de transferência");

    useEffect(()=>{
        const getData = async ()=>{
            const data = await queriesController(queryOption)

            if(data.error){
                setError(true)
                setIntenarlLoading(false)
                return
            }

            setQueryResult(Array.isArray(data) ? [...data] : [data])
            setIntenarlLoading(false)
        }
        getData()
    }, [])
    
    if(internalLoading) return (<Loading/>)

    return (
        <SafeAreaView style={styles.container}>
            <PkFinderLine/>
            {
                error ?
                   <Text style={styles.textError}>Algo deu errado, tente novamente mais tarde...</Text>
                    :
                    queryResult.length == 0 || Object.keys(queryResult[0]) == 0 ?
                        <Text style={styles.textError}>Não encontrado...!</Text>
                        :<>
                            <Text style={styles.howManyResults}>Resultados: {queryResult.length}</Text>
                            <ScrollView style={styles.scrollView}>
                                {
                                    queryResult.map(
                                        (dataPerson, index) =>{
                                            return(
                                                <View key={index} style={[styles.viewMain,{marginBottom: 50}]}>
                                                    <View style={styles.viewResults}>
                                                        <Text style={styles.titleResult}>Nome</Text>
                                                        <TouchableOpacity onPress={() =>{ 
                                                                toastCopy()
                                                                Clipboard.setString(dataPerson.name)}}>
                                                                <Text style={styles.textResult}>{dataPerson.name}</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    {
                                                        dataPerson.cpf &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>CPF</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                        toastCopy()
                                                                        Clipboard.setString(dataPerson.cpf)}}>
                                                                        <Text style={styles.textResult}>{dataPerson.cpf}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            
                                                    }
                                                    {
                                                        dataPerson.document &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>CPF/CNPJ</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                        toastCopy()
                                                                        Clipboard.setString(dataPerson.document)}}>
                                                                        <Text style={styles.textResult}>{dataPerson.document}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            
                                                    }
                                                    {
                                                        dataPerson.person_type &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Tipo pessoa</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                        toastCopy()
                                                                        Clipboard.setString(dataPerson.person_type)}}>
                                                                        <Text style={styles.textResult}>{dataPerson.person_type}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            
                                                    }
                                                    {
                                                        dataPerson.status &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Status</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                        toastCopy()
                                                                        Clipboard.setString(dataPerson.status)}}>
                                                                        <Text style={styles.textResult}>{dataPerson.status}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                            
                                                    }
                                                    {
                                                        dataPerson.phone &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Telefone</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.phone)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.phone}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.email &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Email</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.email)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.email}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.personal_email &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Email pessoal</Text>
                                                                <Text style={styles.textResult}>{dataPerson.personal_email ? 'Sim' : 'Não'}</Text>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.score &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Score</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.score)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.score}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.mother_name &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Nome da mãe</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.mother_name)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.mother_name}</Text>
                                                                </TouchableOpacity>                                                            
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.date_birth &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Nascimento</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                        toastCopy()
                                                                        Clipboard.setString(dataPerson.date_birth)}}>
                                                                        <Text style={styles.textResult}>{dataPerson.date_birth}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.cep &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>CEP</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.cep)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.cep}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.state &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Estado</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.state)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.state}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.city &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Cidade</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.city)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.city}</Text>
                                                                 </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.neighborhood &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Bairro</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.neighborhood)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.neighborhood}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.street &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Rua</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.street)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.street}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.house_number &&
                                                            <View style={styles.viewResults}>
                                                                <Text style={styles.titleResult}>Número da residência</Text>
                                                                <TouchableOpacity onPress={() =>{ 
                                                                    toastCopy()
                                                                    Clipboard.setString(dataPerson.house_number)}}>
                                                                    <Text style={styles.textResult}>{dataPerson.house_number}</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                    }
                                                    {
                                                        dataPerson.complement &&
                                                        <View style={styles.viewResults}>
                                                            <Text style={styles.titleResult}>Complemento</Text>
                                                            <TouchableOpacity onPress={() =>{ 
                                                                toastCopy()
                                                                Clipboard.setString(dataPerson.complement)}}>
                                                                <Text style={styles.textResult}>{dataPerson.complement}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    }
                                                </View>
                                            )
                                        }
                                    )
                                }
                            </ScrollView>
                        </>
            }
        </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0E0E0E",
    },
    scrollView:{
        marginTop:30,
        marginBottom:80
    },
    howManyResults:{
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        fontSize:20,
        fontWeight:'bold',
        alignSelf: 'center',
    },
    viewMain:{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 11,
        paddingHorizontal: 30,
    },
    viewResults:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap:10,
        borderBottomWidth:1,
        borderBottomColor: '#FFFFFF',
    },
    titleResult:{
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        fontSize:18,
        fontWeight:'bold'
    },
    textResult:{
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        fontSize:15,
        paddingBottom:10
    },
    textError: {
        color: "#C90000",
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 60
    },
})