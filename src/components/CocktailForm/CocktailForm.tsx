import React, { useState } from 'react';
import CocktailFormIngredientList from '../CocktailFormIngredientList/CocktailFormIngredientList';
import { format } from 'date-fns';

import {
  Form,
  Label,
  NameInput,
  FormSelect,
  TextArea,
  MainButton,
  CancelButton,
  DeleteButton,
} from './CocktailForm.elements';

const CocktailForm = (props) => {
  const [name, setName] = useState(
    props.selectedCocktail ? props.selectedCocktail.name : ''
  );
  const [category, setCategory] = useState(
    props.selectedCocktail ? props.selectedCocktail.category : ''
  );
  const [description, setDescription] = useState(
    props.selectedCocktail ? props.selectedCocktail.description : ''
  );
  const [timing, setTiming] = useState(
    props.selectedCocktail ? props.selectedCocktail.timing : ''
  );
  const [iba, setIba] = useState(
    props.selectedCocktail ? props.selectedCocktail.iba : false
  );
  const [instructions, setInstructions] = useState(
    props.selectedCocktail ? props.selectedCocktail.instructions : ''
  );
  const [served, setServed] = useState(
    props.selectedCocktail ? props.selectedCocktail.served : ''
  );
  const [note, setNote] = useState(
    props.selectedCocktail ? props.selectedCocktail.note : ''
  );
  const [error, setError] = useState('');
  const [createdAt] = useState(
    props.selectedCocktail ? props.selectedCocktail.createdAt : Date.now()
  ); // if you're editing this cocktail, createdAt state will be passed down as props.
  const [lastEdited, setLastEdited] = useState(
    props.selectedCocktail ? props.selectedCocktail.lastEdited : ''
  );

  function setDefaultState() {
    setName('');
    setCategory('');
    setDescription('');
    setTiming('');
    setIba('');
    setInstructions('');
    setNote('');
  }

  function handleNameChange(e) {
    const newName = e.target.value;
    setName(newName);
  }

  function handleCategoryChange(e) {
    const category = e.target.value;
    setCategory(category);
  }

  function handleDescriptionChange(e) {
    const description = e.target.value;
    setDescription(description);
  }

  function handleTimingChange(e) {
    const timing = e.target.value;
    setTiming(timing);
  }

  function handleServedChange(e) {
    const served = e.target.value;
    setServed(served);
  }

  function handleIbaChange(e) {
    const iba = e.target.value;
    setIba(iba);
  }

  function handleInstructionsChange(e) {
    const instructions = e.target.value;
    setInstructions(instructions);
  }

  function handleNoteChange(e) {
    const note = e.target.value;
    setNote(note);
  }

  function determineAlcoholicStatus(ingredients) {
    let status = 'false';
    ingredients.forEach((ingredient) => {
      if (ingredient.alcoholic === 'true') {
        status = 'true';
      }
    });
    return status;
  }

  function determineVeganStatus(ingredients) {
    let status = 'true';
    ingredients.forEach((ingredient) => {
      if (ingredient.vegan === 'false') {
        status = 'false';
      }
    });
    return status;
  }

  function onSubmit(e) {
    e.preventDefault(); // this prevents the browser window from refreshing when user clicks submit button
    if (props.selectedCocktail) {
      props.handleEditCocktail(props.selectedCocktail.id, {
        name,
        description,
        timing,
        category,
        recipe: props.recipeIngredients,
        instructions,
        served,
        iba,
        note,
        alcoholic: determineAlcoholicStatus(props.recipeIngredients),
        vegan: determineVeganStatus(props.recipeIngredients),
        createdAt: createdAt, // moment.js -> valueOf simply outputs the number of milliseconds since the Unix Epoch
        lastEdited: Date.now(),
      });
    } else {
      props.onSubmit({
        name,
        description,
        timing,
        category,
        recipe: props.recipeIngredients,
        instructions,
        served,
        iba,
        note,
        alcoholic: determineAlcoholicStatus(props.recipeIngredients),
        vegan: determineVeganStatus(props.recipeIngredients),
        createdAt: createdAt, // moment.js -> valueOf simply outputs the number of milliseconds since the Unix Epoch
        lastEdited: Date.now(),
      });
      setDefaultState();
    }
  }

  return (
    <>
      {props.selectedCocktail && (
        <>
          <div
            style={{ marginLeft: '5px', color: '#bbb' }}
          >{`Last Edited: ${format(lastEdited, 'MM/dd/yyy')}`}</div>
          <CancelButton onClick={() => props.setSelectedCocktail()}>
            Cancel Edit
          </CancelButton>
          <DeleteButton onClick={props.handleSetDisplayDeleteConfirmation}>
            Delete Cocktail
          </DeleteButton>
        </>
      )}
      <Form id="cocktail" onSubmit={onSubmit}>
        <Label for="cocktail_name">Name: </Label>
        <NameInput
          type="text"
          id="cocktail_name"
          s
          placeholder="Cocktail name..."
          name="cocktail_name"
          autoComplete="off"
          autoFocus
          value={name}
          onChange={handleNameChange}
          required
        />

        <Label for="cocktail_category">Category: </Label>
        <FormSelect
          value={category}
          id="cocktail_category"
          name="category"
          onChange={handleCategoryChange}
          required
        >
          <option value="">...select cocktail category</option>
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
        <FormSelect value={iba} id="iba" onChange={handleIbaChange} required>
          <option value="">---</option>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </FormSelect>

        <Label for="timing">Timing: </Label>
        <FormSelect
          value={timing}
          id="timing"
          onChange={handleTimingChange}
          required
        >
          <option value="">---</option>
          <option value="aperitivo">Aperitivo</option>
          <option value="digestivo">Digestivo</option>
          <option value="dessert">Dessert</option>
          <option value="anytime">Anytime</option>
        </FormSelect>

        <Label for="description">Recipe Ingredients: </Label>
        <CocktailFormIngredientList
          setRecipeIngredients={props.setRecipeIngredients}
          recipeIngredients={props.recipeIngredients}
          handleRemoveRecipeIngredient={props.handleRemoveRecipeIngredient}
        />

        <Label for="instructions">Preparation Method: </Label>
        <TextArea
          value={instructions}
          onChange={handleInstructionsChange}
          id="instructions"
          placeholder="Explain process. Also, include glassware and garnish..."
          required
        />

        <Label for="served">How's it served? </Label>
        <FormSelect
          value={served}
          id="served"
          onChange={handleServedChange}
          required
        >
          <option value="">---</option>
          <option value="neat">Neat</option>
          <option value="straight-up">Straight up</option>
          <option value="on-the-rocks">On the rocks</option>
        </FormSelect>

        <Label for="description">Description: </Label>
        <TextArea
          form="cocktail"
          type="text"
          placeholder="+ Add description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
          required
        />

        <Label for="note">Notes: </Label>
        <TextArea
          value={note}
          onChange={handleNoteChange}
          placeholder="(optional)"
        />

        <MainButton type="submit">
          {props.selectedCocktail ? 'Submit Edit' : 'Submit New Cocktail'}
        </MainButton>
      </Form>
    </>
  );
};

export default CocktailForm;
