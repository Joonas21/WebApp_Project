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
  const [jwt, setJwt] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch("/users/snippets")
      .then(response => response.json())
      .then(json => setCodes(json))

  }, [codes]) // Reaload the page everytime the codes changes

  return (
    <Router>
      <div className="App">
        <h1>Koodi TUUBI</h1>
        <h2>{jwt ? `Welcome ${user.username}!` : ""}</h2> 
        <Routes>
          <Route path="/" element={<> <Codes codes={codes} /> 
          {!user?.id?.length == 0 && // If user is not logged in we dont show the Addcode component
            <AddCode /> 
          } </> } />
          <Route path="/users/:id" element={<> <PostCode codes={codes} />
          {!user?.id?.length == 0 && // Same as above
           <AddComment /> 
          } </> } />
        </Routes>
        {!user?.id?.length > 0 && // Or just !jwt like in h2 above, this checks if the user is logged in or not
        <Login setJwt={setJwt} setUser={setUser} jwt={jwt}/>
        }
        <Register />
      </div>
    </Router>

  );
}

export default App;
