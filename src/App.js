import React, {useEffect, useState} from 'react'
import SearchIcon from '@material-ui/icons/Search'

import './App.css'
import Recipe from './Recipe'

const App = () => {

  const APP_ID = '0e7fbed6'
  const APP_KEY = '68f8b80cf5e8e26f5dd257354518425a'

  const[recipes, setRecipes] = useState([])
  const[search , setSearch] = useState('')
  const[query, setQuery] = useState('chicken')
  
  useEffect(() => {

    if(query !== "")
    getData()

  }, [query])

  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    
    if(data.hits.length !== 0)
    setRecipes(data.hits)
    
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e =>{
    e.preventDefault()
    setQuery(search)
  }
  return (
    <div className = "app">
      <img className="logo"
           src="https://i.pinimg.com/originals/d0/90/02/d09002b6a1bcb269387fe31cecb7c8da.png"
           alt="" />
      <form className = "search_form">
        <SearchIcon className="search_formIcon" />
        <input className = "search_bar" 
               type = "text" 
               value= {search} 
               onChange = {updateSearch} 
               placeholder="Search for an ingredient"
        />
        <button type = "submit" onClick={getSearch}/>
        
      </form>
      {
      recipes.map(recipe =>(
        <Recipe 
          calories = {recipe.recipe.calories}
          img = {recipe.recipe.image}
          title = {recipe.recipe.label}
          ingredients = {recipe.recipe.ingredients}/>
      ))}
    </div>
  )
}

export default App;
