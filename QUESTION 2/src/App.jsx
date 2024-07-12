import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import All from './pages/All'
import Top from './pages/Top'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all' element={<All />} />
          <Route path='/top' element={<Top />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
