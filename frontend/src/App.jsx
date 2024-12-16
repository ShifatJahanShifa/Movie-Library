import './App.css'
import Navbar from './components/Navbar'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { MovieContextProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieContextProvider>
      <div className=''>
        <Router>
          <Navbar/>
          <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/favorite' element={<Favorite />}/>
          </Routes>
          </main>
        </Router>
      </div>
    </MovieContextProvider>
  )
}

export default App
