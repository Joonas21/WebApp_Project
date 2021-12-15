import './App.css';
import AddCode from "./components/AddCode"
import Codes from "./components/Codes"
import PostCode from "./components/PostCode"
import AddComment from './components/AddComment';
import { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {

  const [codes, setCodes] = useState([{
    "id": 1,
    "code": "Example code for test purposes."
  }])

  const [comments, setComments] = useState([{
    "id": 100,
    "comment": "Example comment for test purposes."
  }])

  /*useEffect(() => {
    fetch("api/data")
      .then(response => response.json())
      .then(json => setCodes(json))

  }, [])*/ //Lecture 11 fullstack

  const addCode = (code) => {
    console.log(code);
    const id = Math.floor(Math.random() * 1000000 + 1000)
    const newCode = {id, ...code}
    setCodes([...codes, newCode]) 
  }

  const addComment = (comment) => {
    console.log(comment);
    const id = Math.floor(Math.random() * 1000000 + 1000)
    const newComment = {id, ...comment}
    setComments([...comments, newComment]) 
  }


  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>
        <Routes>
          <Route path="/" element={<> <Codes codes={codes} /> <AddCode onAdd={addCode} /></> } />
          <Route path="/data/:id" element={<><PostCode codes={codes} comments={comments}/> <AddComment onAdd={addComment} /></> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
