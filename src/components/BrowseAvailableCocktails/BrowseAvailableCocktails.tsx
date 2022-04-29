import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

// functional components
import CocktailListFilter from '../CocktailListFilters/CocktailListFilters';
import MasonryLayout from '../MasonryLayout/MasonryLayout';
import CocktailListItem from '../CocktailListItem/CocktailListItem';

import { selectCocktails } from '../../selectors/cocktails';

// styled components
import {
  InfoSec,
  LastUpdated,
  TimeAgo,
  InfoRow,
  Filters,
  Cocktails,
  TopLine,
} from './BrowseAvailableCocktails.elements';

const BrowseAvailableCocktails = (
  props,
  { lightBg, imgStart, lightTopLine, topLine }
) => {
  const now = new Date();
  const [mansonryColumns, setMansonryColumns] = useState(
    MasonryResponsivenessLogic
  );

  function MasonryResponsivenessLogic() {
    let columns;

    if (window.innerWidth <= 850) {
      columns = 1;
    } else if (window.innerWidth <= 1060) {
      columns = 2;
    } else if (window.innerWidth <= 1270) {
      columns = 3;
    } else if (window.innerWidth <= 1480) {
      columns = 4;
    } else if (window.innerWidth <= 1680) {
      columns = 5;
    } else if (window.innerWidth <= 1900) {
      columns = 6;
    } else if (window.innerWidth > 1900) {
      columns = 7;
    }

    return columns;
  }

  function handleMasonryColumns() {
    const columns = MasonryResponsivenessLogic();
    setMansonryColumns(columns);
  }

  window.addEventListener('resize', handleMasonryColumns);

  return (
    <InfoSec lightBg={lightBg}>
      <LastUpdated>
        LAST UPDATED - <TimeAgo>5 minutes</TimeAgo> ago...
      </LastUpdated>
      <InfoRow imgStart={imgStart}>
        <Filters>
          <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
          <CocktailListFilter />
        </Filters>
        <Cocktails>
          <MasonryLayout columns={mansonryColumns} gap={10}>
            {props.selectCocktails.length > 0 ? (
              props.selectCocktails.map((cocktail) => (
                <CocktailListItem key={cocktail.id} {...cocktail} />
              ))
            ) : (
              <div>No such thing...</div>
            )}
          </MasonryLayout>
        </Cocktails>
      </InfoRow>
    </InfoSec>
  );
};

const mapStateToProps = (state) => {
  return {
    selectCocktails: selectCocktails(
      state.cocktails,
      state.cocktailFilters,
      state.ingredients
    ),
  };
};

export default connect(mapStateToProps)(BrowseAvailableCocktails);
