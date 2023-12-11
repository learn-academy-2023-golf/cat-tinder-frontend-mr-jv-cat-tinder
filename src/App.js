import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import PigeonIndex from './pages/PigeonIndex'
import PigeonEdit from './pages/PigeonEdit'
import PigeonNew from './pages/PigeonNew';
import PigeonShow from './pages/PigeonShow';
import NotFound from './pages/NotFound'
import mockPigeons from './mockPigeons'

const App = () => {
  const [pigeons, setPigeons] = useState([])
  console.log("pigeons:", pigeons)
  useEffect(() => {
    readPigeon()
  }, [])


const readPigeon = () => {
  fetch("http://localhost:3000/pigeons")
  .then((response) => response.json())
  .then((payload) => setPigeons(payload))
  .catch((error) => console.log("Pigeon read errors", error))
}

  const createPigeon = (pigeon) => {
    fetch("http://localhost:3000/pigeons", {
      body: JSON.stringify(pigeon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readPigeon())
    .catch((errors) => console.log("Pigeon create errors", errors))
  }

  const updatePigeon = (pigeon, id) => {
      fetch(`http://localhost:3000/pigeons/${id}`, {
        body: JSON.stringify(pigeon),
        headers: {
          "Content-Type": "application/json"
        },
        method: "PATCH"
      })
        .then((response) => response.json())
        .then(() => readPigeon())
        .catch((errors) => console.log("Pigeon update errors:", errors))
  }

  const deletePigeon = (id) => {
    fetch(`http://localhost:3000/pigeons/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => readPigeon())
      .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
    <h1> LoveBirds </h1>
    <h3>Where Feathers Flirt and Love Takes Flight - Lovebirds Unite! </h3>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pigeonindex" element={<PigeonIndex pigeons={pigeons} />} />
        <Route path="/pigeonnew" element={<PigeonNew createPigeon={createPigeon} />} />
        <Route path="/pigeonshow/:id" element={<PigeonShow pigeons={pigeons} deletePigeon={deletePigeon} />} />
        <Route path="/pigeonedit/:id" element={<PigeonEdit pigeons={pigeons} updatePigeon={updatePigeon} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App