import api from "../../api"

export async function queryByPhoneTelelista(tell){
    try{
        const {data} = await api.get(`/telelista/phone/${tell}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}