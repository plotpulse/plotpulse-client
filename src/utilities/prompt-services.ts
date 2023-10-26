import * as promptAPI from './prompt-api'
import { IPrompt } from '../shared-types'



export async function getAllPrompts() {

    try {
        const allPrompts = await promptAPI.getAll()
        return allPrompts

        
    } catch (error) {
        console.log(error)
        throw new Error('Could not fetch prompts.')
        
    }
    
}


export async function getPrompt(id: number){

    try {
        const onePrompt = await promptAPI.getOne(id)
        return onePrompt

        
    } catch (error) {
        console.log(error)
        throw new Error('Could not fetch prompt')
        
    }
}

export async function createPrompt(newPrompt: IPrompt){
    try {
        const promptResponse = await promptAPI.create(newPrompt)
        return promptResponse
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not create prompt')
        
    }
}