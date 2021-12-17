import { useState } from "react"

const AddCode = () => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        fetch("/users/snippets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(text),
            mode: "cors"
        })

    }

    const handleChange = (e) => {
        setText({...text, [e.target.name]: e.target.value})
    }

    return(
        <div>
            <h1>Post new code snippet</h1>

            <form onSubmit={onSubmit} onChange={handleChange}>
                <input type="text" name="code" />
                <input type="submit" />
            </form> 
        </div>
    )
}

export default AddCode