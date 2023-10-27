import { useAuth0 } from '@auth0/auth0-react'


const PROMPT_URL = import.meta.env.VITE_PROMPT_URL


export async function getAll(){

    try {

        const options = {
            method: 'GET',
            
        }

        const response = await fetch(PROMPT_URL, options)
        
        if (response.ok){
            return response.json()
        } else {
            throw new Error('Invalid Request')
        }
        
    } catch (error) {
        return error
        
    }

}

export async function create(token: string, newPrompt: {}){

    try {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${ token }`
            },
            body: JSON.stringify(newPrompt)
        }

        const response = await fetch(PROMPT_URL, options)

        if (response.ok){
            return response.json()
        } else {
            throw new Error('Invalid request')
        }
        
    } catch (error) {
        console.log(error)
        return error
        
    }

}

export async function getOne(token: string, id: number){
    

    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ token }`

            }
        }
        
        const url = `${PROMPT_URL}/${id}`

        const response = await fetch(url, options)
        
        if (response.ok){
            return response.json()
        } else {
            throw new Error('Invalid Request')
        }
        
    } catch (error) {
        return error
        
    }

}