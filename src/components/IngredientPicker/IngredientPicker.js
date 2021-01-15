import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { setIngredientFilterType } from '../../redux/actions/cocktailFilters'
import IngredientListFilters from '../IngredientListFilters/IngredientListFilters';
import IngredientPickerList from '../IngredientPickerList/IngredientPickerList';
import { 
  IngredientsWrapper, 
  TopLine,
  FilterTypeRadio,
  Label,
  RadioContainer,
  IngredientPickerContainer
} from './IngredientPicker.elements';

const IngredientPicker = (props) => {

  const [ filterType, setFilterType ] = useState('includeAll');

  function handleSetFilterType(e) {
    const filterType = e.target.value;
    setFilterType(filterType);
  }

  useEffect(() => {
    props.dispatch(setIngredientFilterType(filterType));
  }, [filterType])

  return (
    <IngredientPickerContainer>
      <IngredientListFilters />
      <RadioContainer>
        <FilterTypeRadio onChange={handleSetFilterType} type="radio" id="includeAll" value="includeAll" name="filterType" checked={filterType === "includeAll"}/>
        <Label for="includeAll">Each cocktail must include all of the following...</Label>
      </RadioContainer>
      <RadioContainer>
        <FilterTypeRadio onChange={handleSetFilterType} type="radio" id="atLeastOne" value="atLeastOne" name="filterType"/>
        <Label for="atLeastOne">Show me cocktails that inlcude any of the following...</Label>
      </RadioContainer>
      <TopLine>Available ingredients:</TopLine>
      <IngredientsWrapper>
        <IngredientPickerList handleSelectedIngredient={props.handleAddSelectedIngredient} />
      </IngredientsWrapper> 
    </IngredientPickerContainer>
  )
}

export default connect()(IngredientPicker);