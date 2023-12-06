import './App.css';
import React, { useState } from 'react'
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
  const [pigeons, setPigeons] = useState(mockPigeons)
  console.log(pigeons)
  return (
    <>
    <h1> LoveBirds </h1>
    <h3>Where Feathers Flirt and Love Takes Flight - Lovebirds Unite! </h3>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pigeonindex" element={<PigeonIndex />} />
        <Route path="/pigeonnew" element={<PigeonNew />} />
        <Route path="/pigeonshow" element={<PigeonShow />} />
        <Route path="/pigeonedit" element={<PigeonEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App