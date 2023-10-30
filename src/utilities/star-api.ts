
const PROMPT_URL = import.meta.env.VITE_PROMPT_URL

export async function getOne(token: string, promptId: number, starId: number){

    try {

        const options = {
            method: 'GET',
            headers: {

                "Authorization": `bearer ${ token }`

            }
        }
        
        const url = `${PROMPT_URL}/${promptId}/stars/${starId}`

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

export async function create(token: string, promptId: number, newStar: {}){
    

    try {

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `bearer ${ token }`
            },
            body: JSON.stringify(newStar)
        }

        const url = `${PROMPT_URL}/${promptId}/stars`

        const response = await fetch(url, options)

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


export async function destroy(token: string, promptId: number, starId: number){

    try {
        const options = {
            method: 'DELETE',
            headers: {
                "Authorization": `bearer ${ token }`
            },
        }
        const url = `${PROMPT_URL}/${promptId}/stars/${starId}`
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

export async function getAll(token: string, promptId: number){

    try {
        const options = {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${ token }`
            },
        }

        const url = `${PROMPT_URL}/${promptId}/stars/`

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