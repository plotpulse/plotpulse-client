import { useAuth0 } from '@auth0/auth0-react'
import { IStar} from '../shared-types'
const { getAccessTokenSilently } = useAuth0()

const STAR_URL = import.meta.env.VITE_STAR_URL

export async function getOne(id: number){

    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ await getAccessTokenSilently()}`

            }
        }
        
        const url = `${STAR_URL}/${id}`

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

export async function create(newStar: {}){

    try {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${ await getAccessTokenSilently()}`
            },
            body: JSON.stringify(newStar)
        }

        const response = await fetch(STAR_URL, options)

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


export async function destroy(id: number){

    try {
        const options = {
            method: 'DELETE',
            headers: {
                "Authorization": `bearer ${ await getAccessTokenSilently()}`
            },
        }
        const url = `${STAR_URL}/${id}`
        const response = await fetch(url, options)


        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Invalid Request")
        }
    } catch (error) {
        console.log(error)
        return error
    }
}