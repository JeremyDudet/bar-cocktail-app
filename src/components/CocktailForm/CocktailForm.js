import  React, { useState } from 'react';
import moment from 'moment';
import CocktailFormIngredientList from '../CocktailFormIngredientList';


import {Form, Label, NameInput, FormSelect, TextArea, MainButton} from './CocktailForm.elements';


const CocktailForm = (props) => {

  // looking good here.  
  const [ name , setName ] = useState(props.cocktail ? props.cocktail.name : '' ); // this ternary operator is for when we use this same form for editing cocktails. 
  const [ category , setCategory ] = useState(props.cocktail ? props.cocktail.category : '' );
  const [ description , setDescription ] = useState(props.cocktail ? props.cocktail.description : '' );
  const [ timing , setTiming ] = useState(props.cocktail ? props.cocktail.timing : '' );
  const [ iba , setIba ] = useState(props.cocktail ? props.cocktail.iba : false );
  const [ instructions , setInstrusctions ] = useState(props.cocktail ? props.cocktail.instructions : '' );
  const [ note , setNote ] = useState(props.cocktail ? props.cocktail.note : '' );
  const [ error , setError ] = useState('');
  const [ createdAt ] = useState(props.cocktail ? props.cocktail.createdAt : moment() ); // if you're editing this cocktail, createdAt state will be passed down as props.
  const [ lastEdited ] = useState(props.cocktail ? props.cocktail.lastEdited : '');
  


  function handleNameChange(e) {
    const newName = e.target.value;
    setName(newName);
  };

  function handleCategoryChange(e) {
    const category = e.target.value;
    setCategory(category);
  };

  function handleDescriptionChange(e) {
    const description = e.target.value;
    setDescription(description);
  };

  function handleTimingChange(e) {
    const timing = e.target.value;
    setTiming(timing);
  };

  function handleIbaChange(e) {
    const iba = e.target.value;
    setIba(iba);
  }

  function handleInstructionsChange(e) {
    const instructions = e.target.value;
    setInstrusctions(instructions);
  }

  function handleNoteChange(e) {
    const note = e.target.value;
    setNote(note);
  }

  function determineAlcoholicStatus(ingredients) {
    let status = 'false';
    ingredients.forEach((ingredient) => {
      if (ingredient.alcoholic === 'true') {status = 'true'};
    });
    return status;
  }

  function determineVeganStatus(ingredients) {
    let status = 'true';
    ingredients.forEach((ingredient) => {
      if (ingredient.vegan === 'false') {status = 'false'};
    });
    return status;
  }
  
  function onSubmit(e) { 
    e.preventDefault(); // this prevents the browser window from refreshing when user clicks submit button
    if (!description || !category) { // if description is empty or amount is empty, set error state to:
      setError('Error: Please provide name, ingredients and instructions.');
    }else {
      setError('');
      props.onSubmit({
        name,
        description,
        timing,
        category,
        recipe: props.recipeIngredients,
        instructions,
        iba,
        note,
        alcoholic: determineAlcoholicStatus(props.recipeIngredients),
        vegan: determineVeganStatus(props.recipeIngredients),
        createdAt: createdAt.valueOf(), // moment.js -> valueOf simply outputs the number of milliseconds since the Unix Epoch 
        lastEdited: moment().valueOf(), 
      });
    }
  };
  


  return (
    <>
      {error && <p>{error}</p>} {/* So...basically: "If state.error is not empty, display this html tag"  */}
      <p>Created: {createdAt.format("MMM Do YYYY")}</p>
      {lastEdited && <p>Last edited on {lastEdited.format("MMM Do YYYY")}</p>} {/* and same here.*/}
      
      <Form id="cocktail" onSubmit={onSubmit}>
      
        <Label for="cocktail_name">Choose Name: </Label>
        <NameInput
          type='text'
          id="cocktail_name"
          placeholder='+ Add name'
          name='cocktail_name'
          autoComplete="off"
          autoFocus
          value={name}
          onChange={handleNameChange}
        />

        <Label for="cocktail_category">Category: </Label>
        <FormSelect value={category} id="cocktail_category" name="category" onChange={handleCategoryChange}>
          <option value=''>...pick category</option>
          <option value="Classic">Classic</option>
          <option value="Sours">Sours</option>
          <option value="Spirit-Forward">Spirit-Forward</option>
          <option value="Duos and Trios">Duos and Trios</option>
          <option value="Champagne Cocktails">Champagne Cocktails</option>
          <option value="HC&Fs">Highballs Collins & Fizzes</option>
          <option value="Juleps and Smashes">Juleps and Smashes</option>
          <option value="Tropical-Style">Tropical-Style</option>
          <option value="Hot Drinks">Hot Drinks</option>
          <option value="Flips and Nogs">Flips and Nogs</option>
        </FormSelect> 
        

        <Label for="iba">IBA recipe? </Label>
        <FormSelect value={iba} id="iba" onChange={handleIbaChange}>
          <option value=''></option>
          <option value='false'>No</option>
          <option value='true'>Yes</option>
        </FormSelect>

        <Label for="timing">Timing: </Label>
        <FormSelect value={timing} id="timing" onChange={handleTimingChange}>
          <option value=''></option>
          <option value="aperitivo">Aperitivo</option>
          <option value="digestivo">Digestivo</option>
          <option value="dessert">Dessert</option>
          <option value="anytime">Anytime</option>
        </FormSelect>

        <Label for="description">Description: </Label>
        <TextArea
          form="cocktail"
          type='text'
          placeholder='+ Add description'
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        /> 
        <Label for="description">Recipe Ingredients: </Label>
        <CocktailFormIngredientList 
          setRecipeIngredients={props.setRecipeIngredients} 
          recipeIngredients={props.recipeIngredients}
          handleRemoveRecipeIngredient={props.handleRemoveRecipeIngredient}
        />

                                                                                                                                                                                                                                                 
        <Label for="instructions">Preparation: </Label>
        <TextArea
          value={instructions}
          onChange={handleInstructionsChange}
          id="instructions"
          placeholder="Explain process. Also, include glassware and garnish..."
        />


        <Label for="note">Notes: </Label>
        <TextArea 
          value={note}
          onChange={handleNoteChange}
          placeholder="Add a note regarding the cocktail (optional)"
        />
        
        <MainButton type='submit'>Submit</MainButton>

      </Form>
    </>
  );
};

export default CocktailForm;