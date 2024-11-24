import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './css/App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'

function App() {
  return (
    <Router>
      <div className='blog-container'>
        <main>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
