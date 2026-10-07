import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import Theme2 from './pages/Theme2'
import Theme3 from './pages/Theme3'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/theme-2" element={<Theme2 />} />
      <Route path="/theme-3" element={<Theme3 />} />
    </Routes>
  )
}
