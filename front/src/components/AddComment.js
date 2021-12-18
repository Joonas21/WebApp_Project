import { useState } from "react"
import { useParams } from 'react-router-dom'

const AddComment = () => {
    const [text, setText] = useState('')
    const { id } = useParams()
    //const code = codes.find(codes => (codes._id) == id )

    const onSubmit = (e) => {
        e.preventDefault()

        fetch("/users/" + id, {
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