import React from 'react'
import { // we style and define the tags in the elements.js, then we arrange them here. 
  InfoSec, 
  InfoRow, 
  InfoColumn,
  CocktailListWrapper,
  FilterWrapper, 
  TopLine, 
} from './BrowseAvailableCocktails.elements'
import  CocktailList  from '../CocktailList/CocktailList'
import CocktailListFilter from '../CocktailListFilters/CocktailListFilters'
import { Container } from '../../globalStyles'

const BrowseAvailableCocktails = ({ 
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
 }) => {

  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <FilterWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <CocktailListFilter  />
              </FilterWrapper>
            </InfoColumn>
            <InfoColumn>
              <CocktailListWrapper>
                <CocktailList />
              </CocktailListWrapper>
            </InfoColumn>  
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default BrowseAvailableCocktails
