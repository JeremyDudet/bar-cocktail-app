import React from 'react'

// functional components
import  CocktailList  from '../CocktailList/CocktailList'
import CocktailListFilter from '../CocktailListFilters/CocktailListFilters'

// styled components
import { Container } from '../../globalStyles'
import {  
  InfoSec, 
  InfoRow, 
  InfoColumn,
  FilterWrapper, 
  TopLine, 
} from './BrowseAvailableCocktails.elements'

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
              <CocktailList />
            </InfoColumn>  
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  )
}

export default BrowseAvailableCocktails
