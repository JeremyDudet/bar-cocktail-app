import React, {useState} from 'react';
import { IconContext } from "react-icons";
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
  Img,
  InfoIcon,
  CocktailInfoCard,
  InfoContainer,
  CocktailDescription,
  CocktailPreparation,
  CocktailInfoLabel
 } from './CocktailListItem.elements';

const CocktailInfoComponent = (props) => (
  <CocktailInfoCard displayInfo={props.displayInfo}>
    <InfoContainer>
      <CocktailCardHeader>
        <CocktailName>{props.name}</CocktailName>
        <CocktailSubHeading>{`${props.category}, ${props.timing}`}</CocktailSubHeading>
      </CocktailCardHeader>
      <CocktailCardBody>
        <CocktailInfoLabel>Preparation:</CocktailInfoLabel>
        <CocktailPreparation>{props.instructions}</CocktailPreparation>
        <CocktailInfoLabel>About:</CocktailInfoLabel>
        <CocktailDescription>{props.description}</CocktailDescription>
      </CocktailCardBody>
      <button onClick={props.handleSetDisplayInfo}>Close</button>
    </InfoContainer>
  </CocktailInfoCard>
);

const CocktailListItem = ({id, description, name, timing, category, iba, recipe, instructions, alcoholic, vegan}) => {

  const [ displayInfo, setDisplayInfo ] = useState(false);

  function handleSetDisplayInfo() {
    displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
  }

  return (
  <IconContext.Provider value={{ color: "red"}}>
    {displayInfo && <CocktailInfoComponent displayInfo={displayInfo} handleSetDisplayInfo={handleSetDisplayInfo} name={name} description={description} category={category} timing={timing} instructions={instructions}  />}
    <CocktailCard>
      <CocktailCardHeader>
        <InfoIcon onClick={handleSetDisplayInfo}/>
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
  </IconContext.Provider>
)};

// you can leave the first connect "call" empty - this will just pass down props.dispatch
export default CocktailListItem; 