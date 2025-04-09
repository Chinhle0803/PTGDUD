import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import RecipeOfTheDay from './components/RecipeOfTheDay'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
    <RecipeOfTheDay/>
    <Footer/>
    </>
      
  )
}

export default App
