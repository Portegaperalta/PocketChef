import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'
import SearchRecipes from './pages/SearchRecipes/SearchRecipes'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search-Recipe' element={<SearchRecipes />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
