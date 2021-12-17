import { useState } from 'react'

function Register () {

    const [userData, setUserData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData),
            mode: "cors"
        })
    }

    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submit} onChange={handleChange}>
                <input type="text" name="username" />
                <input type="password" name="password" />
                <input type="submit" />
            </form>
        </div>
    )

}

export default Register