import { useAuth0 } from '@auth0/auth0-react'
import * as promptAPI from './prompt-api'



export async function getAllPrompts() {

    try {
        const allPrompts = await promptAPI.getAll()
        return allPrompts

        
    } catch (error) {
        console.log(error)
        throw new Error('Could not retrieve prompts.')
        
    }
    
}