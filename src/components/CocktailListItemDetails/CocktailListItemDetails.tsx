import React from 'react';

import {
  CocktailInfoCard,
  TransparentContainer,
  InfoContainer,
  CocktailDescription,
  CocktailIngredients,
  Ingredient,
  CocktailMethod,
  CocktailInfoLabel,
  CocktailInfoButton,
} from './CocktailListItemDetails.elements';

const CocktailInfoComponent = (props) => (
  <>
    <CocktailInfoCard displayInfo={props.displayInfo} />
    <TransparentContainer>
      <InfoContainer>
        <CocktailName>{props.name}</CocktailName>
        <CocktailSubHeading>{`${props.category}, ${props.timing}`}</CocktailSubHeading>
        <CocktailInfoLabel>Ingredients:</CocktailInfoLabel>
        <CocktailIngredients style={{ display: 'grid' }}>
          {props.recipe.map((ingredient) => (
            <Ingredient>
              <span>{`${ingredient.amount} ${ingredient.units}`}</span>
              <span>{`${ingredient.name}`}</span>
            </Ingredient>
          ))}
        </CocktailIngredients>
        <CocktailInfoLabel>Method:</CocktailInfoLabel>
        <CocktailMethod>{props.instructions}</CocktailMethod>
        <CocktailInfoLabel>About the cocktail:</CocktailInfoLabel>
        <>
          {props.iba === 'true' ? (
            <IbaIcon>
              <Img src={require('../../images/iba-logo.png')} alt="Image" />
            </IbaIcon>
          ) : null}
          {props.alcoholic === 'false' ? (
            <NAIcon>
              <Img src={require('../../images/no-alcohol.png')} alt="Image" />
            </NAIcon>
          ) : null}
          {props.vegan === 'false' ? (
            <NonVeganIcon>
              <Img src={require('../../images/non-vegan.png')} alt="Image" />
            </NonVeganIcon>
          ) : null}
        </>
        <CocktailDescription>{props.description}</CocktailDescription>
        <CocktailInfoButton onClick={props.handleSetDisplayInfo}>
          Close
        </CocktailInfoButton>
      </InfoContainer>
    </TransparentContainer>
  </>
);

export default CocktailInfoComponent;
