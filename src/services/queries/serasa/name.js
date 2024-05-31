import api from "../../api"

export async function queryByName(name){
    try{
        const {data} = await api.get(`/serasa-emails/name/${name}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}