import React, { useState } from 'react';

import { CocktailListItemDetails } from '..';

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
} from './CocktailListItem.elements';

const CocktailListItem = ({
  description,
  name,
  timing,
  category,
  iba,
  recipe,
  instructions,
  alcoholic,
  vegan,
}) => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const [infoIconStatus, setInfoIconStatus] = useState(false);

  function handleSetDisplayInfo() {
    displayInfo ? setDisplayInfo(false) : setDisplayInfo(true);
  }

  return (
    <>
      {displayInfo && (
        <CocktailListItemDetails
          displayInfo={displayInfo}
          handleSetDisplayInfo={handleSetDisplayInfo}
          recipe={recipe}
          name={name}
          description={description}
          category={category}
          timing={timing}
          instructions={instructions}
        />
      )}

      <CocktailCard
        onClick={handleSetDisplayInfo}
        onMouseEnter={() => setInfoIconStatus(true)}
        onMouseLeave={() => setInfoIconStatus(false)}
      >
        <CocktailCardHeader>
          <InfoIcon display={infoIconStatus} />
          <CocktailName>{name}</CocktailName>
          <CocktailSubHeading>{`${category}, ${timing}`}</CocktailSubHeading>{' '}
          {/* Category, timing */}
        </CocktailCardHeader>
        <CocktailCardBody>
          <CocktailRecipeIngredients className="ingredients">
            {recipe.map((ingredient) => (
              <CocktailRecipeIngredient key={ingredient.id}>
                {ingredient.name}
              </CocktailRecipeIngredient>
            ))}
          </CocktailRecipeIngredients>
        </CocktailCardBody>
        <CocktailCardFooter>
          {iba === 'true' ? (
            <IbaIcon>
              <Img src={require('../../images/iba-logo.png')} alt="Image" />
            </IbaIcon>
          ) : null}
          {alcoholic === 'false' ? (
            <NAIcon>
              <Img src={require('../../images/no-alcohol.png')} alt="Image" />
            </NAIcon>
          ) : null}
          {vegan === 'false' ? (
            <NonVeganIcon>
              <Img src={require('../../images/non-vegan.png')} alt="Image" />
            </NonVeganIcon>
          ) : null}
        </CocktailCardFooter>
      </CocktailCard>
    </>
  );
};

// you can leave the first connect "call" empty - this will just pass down props.dispatch
export default CocktailListItem;
