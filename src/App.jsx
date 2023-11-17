import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import News from './views/News'
import Newsdetails from './views/Newsdetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/News' element={<News />} />
        <Route path='/Newsdetails' element={<Newsdetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
