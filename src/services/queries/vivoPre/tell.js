import api from "../../api"

export async function queryByPhoneVivo_pre(tell){
    try{
        const {data} = await api.get(`/vivo-pre/phone/${tell}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}