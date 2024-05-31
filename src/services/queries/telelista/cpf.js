import api from "../../api"

export async function queryByCPFtelelista(cpf){
    try{
        const {data} = await api.get(`/telelista/cpf/${cpf}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}