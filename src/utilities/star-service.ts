
import * as starAPI from './star-api'


export async function getStar(starId: number){

    try {
        const oneStar = await starAPI.getOne(starId)
        return oneStar
        
    } catch (error) {
        console.log(error)
        throw new Error('Unable to fetch star')

        
    }
}

export async function createStar(newStar: {}){
    try {
        const starResponse = await starAPI.create(newStar)
        return starResponse
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not create star')
        
    }
}

export async function deleteStar(starId: number){

    try {
        const deletedStar = await starAPI.destroy(starId)
        return deletedStar
        
    } catch (error) {
        console.log(error)
        throw new Error('Could not delete star')
    }

}

