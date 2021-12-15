import { useState } from "react"

const AddComment = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        
        onAdd({ comment: text })

        setText("")
    }

    return(
        <div>
            <h1>Post new comment</h1>

            <form onSubmit={onSubmit}>
                <label>Comment</label>
                <textarea placeholder="Post comment" onChange={(e) => setText(e.target.value)} value={text}/>
                <input type="submit" value="Post comment" className="btn"></input>
            </form>
        </div>
    )
}

export default AddComment