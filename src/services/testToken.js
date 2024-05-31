import api from "./api"

export async function testToken(id){ // testa com a rota do GOV, aguardando rota de verificação de token.
    try{
        await api.get(`/gov/id/2`)
        return true
    }catch{
        return false
    }
}