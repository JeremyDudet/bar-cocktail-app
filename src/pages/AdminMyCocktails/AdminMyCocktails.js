// core
import React, { useState } from 'react'

// functional components
import { AddCocktailPage, EditCocktailPage } from '../../components';

//styled components
import { InfoSec, Container } from '../../globalStyles';
import styled from 'styled-components';


const AdminMyCocktails = () => {

  const [ selectedAction, setSelectedAction ] = useState("new"); // "new" or "edit"

  const ActionButton = styled.h3`
    color: ${({selected}) => ( selected ? "#222" : "#fff")};
    background: ${({selected}) => ( selected ? "rgb(88, 183, 146)" : "#2f2f2f")};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    &:hover {
      cursor: pointer;
      background: ${({selected}) => ( selected ? "rgb(98, 193, 156)" : "#333")};
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

    }
    text-align: center;
    min-width: 200px;
    margin: 0 0.25rem 1rem 0.25rem;
    @media screen and (max-width: 480px) {
      min-width: none;
    } 
  `;
  const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 480px) {
      justify-content: center;
    }
  `;

  return (
    <InfoSec>
      <Container>
        <ButtonContainer>
          <ActionButton selected={(selectedAction === "new")} onClick={()=> setSelectedAction("new")}>Add New Cocktail</ActionButton>
          <ActionButton selected={(selectedAction === "edit")} onClick={()=> setSelectedAction("edit")}>Edit Cocktail</ActionButton>
        </ButtonContainer>
        { (selectedAction === "new") ? <AddCocktailPage/> : <EditCocktailPage/> }
      </Container>
    </InfoSec>
  )
}

export default AdminMyCocktails
