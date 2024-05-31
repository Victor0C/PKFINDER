import api from "../../api"

export async function queryByCPFvivo_pre(document){
    try{
        const {data} = await api.get(`/vivo-pre/document/${document}`)
        return data
      
    }catch(error){
        return {error: error}
    }
}