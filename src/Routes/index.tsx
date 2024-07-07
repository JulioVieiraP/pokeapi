import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Pokemon from '../pages/Pokemon'

const RouterView = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Pokemon/" element={<Pokemon />} />
    </Routes>
  )
}

export default RouterView
