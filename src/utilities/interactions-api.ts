import { useAuth0 } from '@auth0/auth0-react'
import { IStar} from '../shared-types'
const { getAccessTokenSilently } = useAuth0()

const STAR_URL = import.meta.env.VITE_STAR_URL

export async function toggleStar(promptId: number, userId: string){
    // get the star

    // if it exists, delete it

    // if not, create it
}