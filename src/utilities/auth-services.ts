import { IUserProfile } from "../shared-types";

const PROFILE_URL = import.meta.env.VITE_PROFILE_URL


export async function getProfile(token: string, userEmail: string): Promise<IUserProfile | null>{
    try {

        const options: RequestInit = {

            method: 'GET',
            headers: {

                "Authorization": `bearer ${token}`
            },
        }
        const url = `${PROFILE_URL}/${userEmail}`

        const response = await fetch(url, options)
        if (response.ok){
            return response.json()
        } else {
            throw new Error("Invalid request")
        }


        
    } catch (error) {
        console.log(error)
        return null

        
    }

}


export async function createProfile(){
    
}