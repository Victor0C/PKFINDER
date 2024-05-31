import api from "../../api"

export async function queryByNameTelelista(name){
    try{
        const {data} = await api.get(`/telelista/name/${name}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}