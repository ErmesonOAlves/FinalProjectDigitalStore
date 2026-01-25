import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
      
    
  )
}

export default App
