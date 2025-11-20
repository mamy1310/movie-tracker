import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Container from '@mui/material/Container'

function App() {

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
          {/* Redirect automatically all unknown routes to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ Container>
  )
}

export default App
