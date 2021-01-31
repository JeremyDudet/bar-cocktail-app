import React from 'react';
import { useState, useEffect } from 'react';

import {Form,Label, Input,TextArea,FormSelect,MainButton} from './IngredientForm.elements';

const IngredientForm = (props) => {

  const [ name, setName]  = useState(props.ingredient ? props.ingredient.name : '');
  const [ description, setDescription ] = useState((props.ingredient ? props.ingredient.description : ''));
  const [ category, setCategory ] = useState(props.ingredient ? props.ingredient.category : '');
  const [ abv , setAbv ] = useState(props.ingredients ? props.ingredients.abv : 0);
  const [ alcoholic, setAlcoholic ] = useState(props.ingredient ? props.ingredient.alcoholic : 'false');
  const [ vegan, setVegan ] = useState(props.ingredients ? props.ingredient.vegan : 'true');
  const [ available, setAvailable ] = useState(props.ingredient ? props.ingredient.available : 'true');
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
      setError('Error: Please complete new ingredient form.');
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
    <>
    {error && <p>{error}</p>}
      <Form onSubmit={onSubmit}>
        <Label for="name">Name:</Label>
        <Input 
          type="text" 
          id="name" 
          name="name"
          value={name} 
          onChange={handleNameChange} 
          placeholder="Ingredient name..."
          autoComplete="off"
          required
        />
        <Label for="description">Description:</Label>
        <TextArea  
          id="description" 
          name="description" 
          value={description} 
          onChange={handleDescriptionChange} 
          placeholder="Ingredient description (optional)"
          autoComplete="off"
        />
        <Label for="ingredient_category">Category:</Label>
        <FormSelect id="ingredient_category" name="category" value={category} onChange={handleCategoryChange} size="1" required>
          <option value="">---</option>
          <option value="Spirit">Spirit / Liquor</option>
          <option value="Infused-Spirit">Infused Spirit</option>
          <option value="Liqueur">Flavored Liqueur</option>
          <option value="Wine/Vermouth">Wine/Vermouth</option>
          <option value="Beer/Cider">Beer/Cider</option>
          <option value="Egg&Dairy">Egg & Dairy</option>
          <option value="Bitters">Bitters</option>
          <option value="Syrup">Syrup</option>
          <option value="Fruits, Vegies & Juice">Fruits, Vegies & Juice</option>
          <option value="Tea">Tea</option>
          <option value="Savory">Savory Products</option>
          <option value="Mixer">Mixer</option>
        </FormSelect>
        <Label for="abv">{"ABV (alcohol percentage)"}</Label>
        <Input 
          type="number" 
          id="abv" 
          name="abv" 
          value={abv} 
          onChange={handleAbvChange} 
          placeholder="how much alcohol %"
          required
        />
        {/* remember: honey is not considered vegan */}
        <Label for="vegan">Is ingredient vegan?</Label>
        <FormSelect id="vegan" name="vegan" value={vegan} onChange={handleVeganChange} required>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </FormSelect>
        <Label for="available">Ingredient currently stocked?</Label>
        <FormSelect id="available" name="available" value={available} onChange={handleAvailableChange} required>
          <option value='true' selected>Stocked</option>
          <option value='false' >86</option>
        </FormSelect>
        <MainButton type="submit">Submit Ingredient</MainButton>
      </Form>
    </>
  );

}

export default IngredientForm;