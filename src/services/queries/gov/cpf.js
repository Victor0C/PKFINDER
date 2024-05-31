import api from "../../api"

export async function queryByCPFgov(cpf){
    try{
        const {data} = await api.get(`/gov/cpf/${cpf}`)//cpf de teste = 012.546.072-42
        return data
      
    }catch(error){
        return {error: error}
    }
}