import React from 'react';
import IngredientList from './IngredientList';
import IngredientListFilters from './IngredientListFilters';

const IngredientDashboard = () => {
  return (
    <>
    <IngredientListFilters />
      <IngredientList />
    </>
  );
}

export default IngredientDashboard;