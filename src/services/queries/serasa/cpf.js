import api from "../../api"

export async function queryByCPFseras_emails(cpf){
    try{
        const {data} = await api.get(`/serasa-emails/cpf/${cpf}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}