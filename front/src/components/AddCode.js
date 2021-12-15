import { useState } from "react"

const AddCode = ({ onAdd }) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        
        onAdd({ code: text })

        setText("")
    }

    return(
        <div>
            <h1>Post new code snippet</h1>

            <form onSubmit={onSubmit}>
                <label>Code</label>
                <textarea placeholder="Post code snippet" onChange={(e) => setText(e.target.value)} value={text}/>
                <input type="submit" value="Post code" className="btn"></input>
            </form>
        </div>
    )
}

export default AddCode