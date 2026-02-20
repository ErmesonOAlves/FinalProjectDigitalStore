import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import ProductListingPage from './pages/ProductListingPage'
import Login from './components/Login'

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/produtos" element={<ProductListingPage/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
      
    
  )
}

export default App
