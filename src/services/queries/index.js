import { queryByCPFgov } from "./gov/cpf"
import { queryByCPFseras_emails } from "./serasa/cpf"
import { queryByName as queryByNameSerasa_emails } from "./serasa/name"
import { queryByCPFtelelista } from "./telelista/cpf"
import { queryByEmailSerasa_emails } from "./telelista/email"
import { queryByNameTelelista } from "./telelista/name"
import { queryByPhoneTelelista } from "./telelista/tell"
import { queryByEmailVivo_pre } from "./vivoPre/email"
import { queryByPhoneVivo_pre } from "./vivoPre/tell"


export default async function queriesController({researchData, typeData, dataBase}){
    if(dataBase == 'Gov'){
        if(typeData == 'id'){}

        if(typeData == 'cpf'){
            const data = await queryByCPFgov(researchData)
            return data
        }

        if(typeData == 'name'){}
        
        if(typeData == 'mother'){}
    }

    if(dataBase == 'Serasa Emails'){
        if(typeData == 'cpf'){
            const data = await queryByCPFseras_emails(researchData)
            return data
        }

        if(typeData == 'name'){
            const data = await queryByNameSerasa_emails(researchData)
            return data
        }

        if(typeData == 'email'){
            const data = await queryByEmailSerasa_emails(researchData)
            return data
        }
    }

    if(dataBase == 'Telelista'){
        if(typeData == 'cpf'){
            const data = await queryByCPFtelelista(researchData)
            return data
        }

        if(typeData == 'name'){
            const data = await queryByNameTelelista(researchData)
            return data
        }

        if(typeData == 'tell'){
            const data = await queryByPhoneTelelista(researchData)
            return data
        }
    }

    if(dataBase == 'Vivo Pre'){
        if(typeData == 'cpf'){
            const data = await queryByCPFtelelista(researchData)
            return data
        } 

        if(typeData == 'tell'){
            const data = await queryByPhoneVivo_pre(researchData)
            return data
        }  

        if(typeData == 'email'){
            const data = await queryByEmailVivo_pre(researchData)
            return data
        }  
    }

}