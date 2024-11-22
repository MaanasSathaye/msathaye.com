import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Thoughts'

function App() {
  return (
    <Router>
      <div className="blog-container">
        <main>
        <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/thoughts" element={<Posts />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App