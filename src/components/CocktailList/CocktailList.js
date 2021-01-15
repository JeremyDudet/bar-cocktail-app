import React from 'react';
import { connect } from 'react-redux';
import CocktailListItem from '../CocktailListItem/CocktailListItem';
import { selectCocktails } from '../../selectors/cocktails';
import { CocktailListGrid } from './CocktailList.elements'

const CocktailList = (props) => {
  return (
    <CocktailListGrid>
      {
        (props.selectCocktails.length > 0) ? props.selectCocktails.map(cocktail => (<CocktailListItem key={cocktail.id} {...cocktail} />)) : <div>No such thing...</div>
      }
    </CocktailListGrid>
  );
};

const mapStateToProps = (state) => {
  return {
    selectCocktails: selectCocktails(state.cocktails, state.cocktailFilters, state.ingredients)
  }
}

// HOC
export default connect(mapStateToProps)(CocktailList);