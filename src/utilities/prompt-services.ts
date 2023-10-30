import * as promptAPI from './prompt-api'
import { useAuth0 } from '@auth0/auth0-react'

interface NewPrompt {
    content: string;
    genres: string[];
    user: string;
}


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

export async function createPrompt(token: string, newPrompt: NewPrompt ){
    newPrompt.genres = newPrompt.genres.filter(genre => genre !== null)


    try {
        const promptResponse = await promptAPI.create(token, newPrompt)
        return promptResponse
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not create prompt')
    }
}