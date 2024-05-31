import api from "./api";

export async function signIn(loginData) {
    try{
        const response = (await api.post('/session/signin',loginData)).data

        return response
    }catch(error){
        return {error: error.response.status}
    }
}