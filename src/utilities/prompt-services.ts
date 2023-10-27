import * as promptAPI from './prompt-api'
import { useAuth0 } from '@auth0/auth0-react'


export async function getAllPrompts() {

    try {
        const allPrompts = await promptAPI.getAll()
        return allPrompts

        
    } catch (error) {
        console.log(error)
        throw new Error('Could not fetch prompts.')
        
    }
    
}


export async function getPrompt(token: string, id: number){
    

    try {
        const onePrompt = await promptAPI.getOne(token, id)
        return onePrompt

        
    } catch (error) {
        console.log(error)
        throw new Error('Could not fetch prompt')
        
    }
}

export async function createPrompt(token: string, newPrompt: {}){
    // console.log('create prompt service')
    // const { user } = useAuth0()

    // const email = user ? user.email : ""

    // const reshaped = {...newPrompt, user: email}
    // console.log(reshaped)


    try {
        const promptResponse = await promptAPI.create(token, newPrompt)
        return promptResponse
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not create prompt')
    }
}