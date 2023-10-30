
import * as starAPI from './star-api'


export async function getAllStars(token: string, promptId: number ) {

    try {
        const allStars = await starAPI.getAll(token, promptId)
        return allStars
        
    } catch (error) {
        console.log(error)
        throw new Error('Unable to fetch stars')
        
        
    }
    
}

export async function getStar(token: string, promptId: number, starId: number){

    try {
        const oneStar = await starAPI.getOne(token, promptId, starId)
        return oneStar
        
    } catch (error) {
        console.log(error)
        throw new Error('Unable to fetch star')

        
    }
}

export async function createStar(token: string, promptId: number, newStar: {}){
    try {
        const starResponse = await starAPI.create(token, promptId, newStar)
        return starResponse
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not create star')
        
    }
}

export async function deleteStar(token: string, promptId: number, starId: number){

    try {
        const deletedStar = await starAPI.destroy(token, promptId, starId)
        return deletedStar
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not delete star')
    }

}

