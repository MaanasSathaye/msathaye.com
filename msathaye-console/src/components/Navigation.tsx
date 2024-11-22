import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/posts">posts</Link>
    </nav>
  )
}

export default Navigation