import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home/Home'
import SearchRecipes from './pages/SearchRecipes/SearchRecipes'
import SavedRecipes from './pages/Saved Recipes/SavedRecipes'
import UserProfile from './pages/UserProfile/UserProfile'
import RecipeInfo from './components/RecipeInfo'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Search-Recipe' element={<SearchRecipes />} />
        <Route path='/Recipe-Info' element={<RecipeInfo />} />
        <Route path='/Saved-Recipes' element={<SavedRecipes />} />
        <Route path='/Profile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
