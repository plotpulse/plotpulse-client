import { IUserProfile } from "../shared-types";

const PROFILE_URL = import.meta.env.VITE_PROFILE_URL


export async function getProfile(token: string, user: string): Promise<IUserProfile | null>{
    try {

        const options: RequestInit = {

            method: 'GET',
            headers: {

                "Authorization": `bearer ${token}`
            },
            body: user
        }

        const response = await fetch(PROFILE_URL, options)
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