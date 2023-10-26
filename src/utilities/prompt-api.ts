import { useAuth0 } from '@auth0/auth0-react'
const { getAccessTokenSilently } = useAuth0()

const PROMPT_URL = import.meta.env.VITE_PROMPT_URL


export async function getAll(){
    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ await getAccessTokenSilently()}`

            }
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

export async function create(){

}

export async function getOne(id: number){

    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ await getAccessTokenSilently()}`

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