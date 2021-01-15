import React from 'react';
import { 
  CocktailCard, 
  CocktailCardHeader,
  CocktailName,
  CocktailSubHeading,
  CocktailCardBody,
  CocktailRecipeIngredients,
  CocktailRecipeIngredient,
  CocktailCardFooter,
  IbaIcon,
  NAIcon,
  NonVeganIcon,
  Img
 } from './CocktailListItem.elements';




const CocktailListItem = ({id, description, name, timing, category, iba, recipe, alcoholic, vegan}) => {

  return (
  <CocktailCard>
    <CocktailCardHeader>
      <CocktailName>{name}</CocktailName>
      <CocktailSubHeading>{`${category}, ${timing}`}</CocktailSubHeading> {/* Category, timing */}
    </CocktailCardHeader>
    <CocktailCardBody>
      <CocktailRecipeIngredients>{recipe.map(ingredient => (<CocktailRecipeIngredient>{ingredient.name}</CocktailRecipeIngredient>))}</CocktailRecipeIngredients>
    </CocktailCardBody>
    <CocktailCardFooter>
      {(iba === "true") ? <IbaIcon><Img src={require('../../images/iba-logo.png')} alt="Image"/></IbaIcon> : null}
      {(alcoholic === "false") ? <NAIcon><Img src={require('../../images/no-alcohol.png')} alt="Image"/></NAIcon> : null}
      {(vegan === "false") ? <NonVeganIcon><Img src={require('../../images/non-vegan.png')} alt="Image"/></NonVeganIcon> : null}
    </CocktailCardFooter>
  </CocktailCard>
)};

// you can leave the first connect "call" empty - this will just pass down props.dispatch
export default CocktailListItem; 