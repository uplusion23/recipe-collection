import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isAddRecipeFormDisplayed, setIsAddRecipeFormDisplayed] = useState(false);


  const saveRecipe = (event) => {
    event.preventDefault();
    setRecipes([...recipes, {
      name: event.target.elements.newRecipeName.value,
      instructions: event.target.elements.newRecipeInstructions.value
    }]);
  }

  const addNewRecipeForm = (
    <form id="recipe-form" onSubmit={saveRecipe}>
      <label htmlFor="newRecipeName">Recipe name: </label>
      <input type="text" id="newRecipeName" />
      <label htmlFor="newRecipeInstructions">Instructions:</label>
      <textarea id="newRecipeInstructions" placeholder="write recipe instructions here..." />
      <input type="submit" />
    </form>
  )

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {
        isAddRecipeFormDisplayed
          ? addNewRecipeForm
          : <button id="add-recipe" onClick={() => setIsAddRecipeFormDisplayed(true)} > Add Recipe</button>
      }
      {
        (recipes.length > 0)
        ? <ul>
            {
              recipes.map((recipe, index) => {
                return <li key={index}>{recipe.name}</li>
              }
            )}
          </ul>
        : <p>There are no recipes to list.</p>
      }
    </div>
  );
}

export default App;
