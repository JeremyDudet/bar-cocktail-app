import React from 'react';
import { useState, useEffect } from 'react';

const IngredientForm = (props) => {

  const [ name, setName]  = useState(props.ingredient ? props.ingredient.name : '');
  const [ description, setDescription ] = useState((props.ingredient ? props.ingredient.description : ''));
  const [ category, setCategory ] = useState(props.ingredient ? props.ingredient.category : '');
  const [ abv , setAbv ] = useState(props.ingredients ? props.ingredients.abv : 0);
  const [ alcoholic, setAlcoholic ] = useState(props.ingredient ? props.ingredient.alcoholic : 'false');
  const [ vegan, setVegan ] = useState(props.ingredients ? props.ingredient.isVegan : 'true');
  const [ available, setAvailable ] = useState(props.ingredient ? props.ingredient.availability : 'true');
  const [ error, setError ] = useState('');
  
  useEffect (() => setAlcoholChange())

  function setDefaultState() {
    setName('');
    setDescription('');
    setCategory('');
    setAlcoholic('false');
    setAbv(0);
    setVegan('');
    setAvailable('');
  }

  function handleNameChange(e) {
    const name = e.target.value; 
    setName(name);
  }

  function handleDescriptionChange(e) {
  const description = e.target.value; 
    setDescription(description);
  }

  function handleCategoryChange(e) {
    const category = e.target.value;
    setCategory(category);
  }

  function handleAbvChange(e) {
    const abv = e.target.value;
    setAbv(abv);
  }

  function setAlcoholChange() {
    return (abv >= 1) ? setAlcoholic('true') : setAlcoholic('false');
  }

  function handleVeganChange(e) {
    const vegan = e.target.value;
    setVegan(vegan);
  }

  function handleAvailableChange(e) {
    const available = e.target.value;
    setAvailable(available);
  }

  function onSubmit(e) {
    e.preventDefault(); // this prevents the browser window from refreshing when user clicks submit button
    if (!name || !category ) { // if name is empty or category is empty, set error state to:
      setError('Error: Please complere new ingredient form.');
    }else {
      setError('');
      props.onSubmit({
        name,
        description,
        category, 
        abv,
        alcoholic,
        vegan,
        available
      });
      setDefaultState();
    }
  };

  return (
    <div>
    {error && <p>{error}</p>}
      <form onSubmit={onSubmit}>
        <label for="name">Name :</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          value={name} 
          onChange={handleNameChange} 
          placeholder="name"
          autoComplete="off"
          required
        />
        <br/>
        <label for="description">Description :</label>
        <textarea  
          id="description" 
          name="description" 
          value={description} 
          onChange={handleDescriptionChange} 
          placeholder="Description (optional)"
          autoComplete="off"
        />
        <br/>
        <label for="ingredient_category">Category:</label>
        <select id="ingredient_category" name="category" value={category} onChange={handleCategoryChange} size="1" required>
          <option value="">--choose category--</option>
          <option value="Spirit">Spirit / Liquor</option>
          <option value="Liqueur">Flavored Liqueur</option>
          <option value="Wine/Vermouth">Wine/Vermouth</option>
          <option value="Beer/Cider">Beer/Cider</option>
          <option value="Bitters">Bitters</option>
          <option value="Syrup">Syrup</option>
          <option value="Fruit/Veg & Juice">Fruit/Veg & Juice</option>
          <option value="Mixer">Mixer</option>
        </select><br/>
        <label for="abv">ABV (alcohol %: )</label>
        <input 
          type="number" 
          id="abv" 
          name="abv" 
          value={abv} 
          onChange={handleAbvChange} 
          placeholder="how much alcohol %"
        />
        <br/>
        {/* remember: honey is not considered vegan */}
        <label for="vegan">Is Inredient Vegan?</label>
        <select id="vegan" name="vegan" value={vegan} onChange={handleVeganChange}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <br/>
        <label for="available">Ingredient currently Available?</label>
        <select id="available" name="available" value={available} onChange={handleAvailableChange}>
          <option value='true' selected>Stocked</option>
          <option value='false' >86</option>
        </select>
        <br/>
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );

}

export default IngredientForm;