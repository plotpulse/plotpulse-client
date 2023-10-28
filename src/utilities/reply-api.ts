

const PROMPT_URL = import.meta.env.VITE_PROMPT_URL

export async function getAll(token: string, promptId: number){

    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ token }`

            }
        }

        const replyURL = `${PROMPT_URL}/${promptId}/replies/`

        const response = await fetch(replyURL, options)
        
        if (response.ok){
            return response.json()
        } else {
            throw new Error('Invalid Request')
        }
        
    } catch (error) {
        return error
        
    }

}

export async function create(token: string, promptId:number, newReply: {}){


    try {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${ token }`
            },
            body: JSON.stringify(newReply)
        }

        const replyURL = `${PROMPT_URL}/${promptId}/replies/`

        const response = await fetch(replyURL, options)

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