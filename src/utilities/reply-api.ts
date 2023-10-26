import { useAuth0 } from '@auth0/auth0-react'
import { IReply } from '../shared-types'
const { getAccessTokenSilently } = useAuth0()
const PROMPT_URL = import.meta.env.VITE_PROMPT_URL

export async function getAll(promptId: number){
    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ await getAccessTokenSilently()}`

            }
        }

        const replyURL = `${PROMPT_URL}/${promptId}`

        const response = await fetch(replyURL, options)
        
        if (response.ok){
            return response.json()
        } else {
            throw new Error('Invalid Request')
        }
        
    } catch (error) {
        return error
        
    }

}

export async function create(promptId:number, newReply: IReply){

    try {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${ await getAccessTokenSilently()}`
            },
            body: JSON.stringify(newReply)
        }

        const replyURL = `${PROMPT_URL}/${promptId}`

        const response = await fetch(replyURL, options)

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