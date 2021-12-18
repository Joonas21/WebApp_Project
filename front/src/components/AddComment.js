import { useState } from "react"
import { useParams } from 'react-router-dom'

const AddComment = () => {
    const [text, setText] = useState('')
    const { id } = useParams()

    const onSubmit = (e) => {
        e.preventDefault()

        fetch("/users/" + id, { //Adding the id dynamicly so we can access it on the backend
            method:"POST",
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
            <h1>Post new comment</h1>

            <form onSubmit={onSubmit} onChange={handleChange}>
                <input type="hidden" name="_id" value={id} />
                <input type="text" name="comment" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddComment