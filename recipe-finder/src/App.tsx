import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'
import SearchRecipes from './pages/SearchRecipes/SearchRecipes'
import SavedRecipes from './pages/Saved Recipes/SavedRecipes'
import UserProfile from './pages/UserProfile/UserProfile'
import RecipeInfo from './components/RecipeInfo'
import BenefitRecipeInfo from './components/BenefitRecipeInfo'
import { useEffect } from 'react'

function App() {

  // creates empty savedRecipes array on session storage 
  useEffect(() => {
    const saved = sessionStorage.getItem('savedRecipes')
    if (!saved) {
      sessionStorage.setItem('savedRecipes', JSON.stringify([]))
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Recipe-with-benefits/:id' element={<BenefitRecipeInfo />} />
        <Route path='/Search-Recipe' element={<SearchRecipes />} />
        <Route path='/Recipe/:id' element={<RecipeInfo />} />
        <Route path='/Saved-Recipes' element={<SavedRecipes />} />
        <Route path='/Profile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
