import * as interactionsAPI from './interactions-api'


export async function toggleStar(promptId: number, userId: string){

    try {
        const starResponse = await interactionsAPI.toggleStar(promptId, userId)
        return starResponse
        
    } catch (error) {
        console.log(error)
        throw new Error('Unable to resolve interaction')

        
    }
}

