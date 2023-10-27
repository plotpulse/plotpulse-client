import { useState, ChangeEvent } from "react"

export function NewPromptForm(){

    const defaultForm = {
        content: "",
        genres: []
        
    }

    const [ promptForm, setPromptForm ] = useState(defaultForm)



    function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const { name, value } = evt.target
        setPromptForm({ ...promptForm, [name]: value })


    }

    return (
        <>
        <p>form goes here</p>
        
        
        </>
    )
}