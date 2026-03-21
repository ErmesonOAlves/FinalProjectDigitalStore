import HomePage from './pages/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import ProductListingPage from './pages/ProductListingPage'
import Login from './components/Login'
import ProductViewPage from'./pages/ProductViewPage'

function App() {

  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/produtos" element={<Layout><ProductListingPage/></Layout>} />
          <Route path="/product/:id" element={<ProductViewPage/>} />
        </Routes>
      
    </BrowserRouter>
      
    
  )
}

export default App
