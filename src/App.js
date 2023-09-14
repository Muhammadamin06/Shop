import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Category from './pages/Category'
import Contacts from './pages/Contacts'
import Product from './pages/Product'




function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Category />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='/:Id' element={<Product />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App