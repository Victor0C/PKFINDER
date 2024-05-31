import api from "../../api"

export async function queryByEmailSerasa_emails(email){
    try{
        const {data} = await api.get(`/serasa-emails/email/${email}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}