import api from "../../api"

export async function queryByEmailVivo_pre(email){
    try{
        const {data} = await api.get(`/vivo-pre/email/${email}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}