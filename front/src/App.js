import './App.css';
import AddCode from "./components/AddCode"
import Codes from "./components/Codes"
import PostCode from "./components/PostCode"
import AddComment from './components/AddComment'
import Login from './components/Login'
import Register from './components/Register'
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {

  const [codes, setCodes] = useState([])
  
  /*const [comments, setComments] = useState([{
    "id": 100,
    "comment": "Example comment for test purposes."
  }]) */

  const [jwt, setJwt] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/users/snippets")
      .then(response => response.json())
      .then(json => setCodes(json))

  }, []) //Lecture 11 fullstack

  /*const addCode = (code) => {
    console.log(code);
    const id = Math.floor(Math.random() * 1000000 + 1000)
    const newCode = {id, ...code}
    setCodes([...codes, newCode]) 
  }*/

  /*const addComment = (comment) => {
    console.log(comment);
    const id = Math.floor(Math.random() * 1000000 + 1000)
    const newComment = {id, ...comment}
    setComments([...comments, newComment]) 
  }*/


  return (
    <Router>
      <div className="App">
        <h1>Koodi TUUBI</h1>
        <h2>{jwt ? `Welcome ${user.username}!` : ""}</h2>
        <Routes>
          <Route path="/" element={<> <Codes codes={codes} /> <AddCode /> </> } />
          <Route path="/users/:id" element={<> <PostCode codes={codes} /> <AddComment /> </> } />
        </Routes>
        {!user?.id?.length > 0 && // Or just !jwt like in h2 above
        <Login setJwt={setJwt} setUser={setUser} jwt={jwt}/>
        }
        <Register />
      </div>
    </Router>
  );
}

export default App;
