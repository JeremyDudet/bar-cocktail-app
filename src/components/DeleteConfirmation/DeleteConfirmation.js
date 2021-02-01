import React from 'react'
import {DeleteConfirmationSection, TransparentContainer, DeleteConfirmationCard, WarningDescription, CancelDeleteButton, ConfirmDeleteButton} from './DeleteConfirmation.elements';

const DeleteConfirmation = (props) => {
  return (
    <>
      <DeleteConfirmationSection displayInfo={props.displayInfo}></DeleteConfirmationSection>
      <TransparentContainer>
        <DeleteConfirmationCard>
          <WarningDescription >{`Are you sure you want to DELETE ${JSON.stringify(props.selectedItem?.name)}?`}</WarningDescription>
          <CancelDeleteButton onClick={props.handleSetDisplayDeleteConfirmation}>CANCEL</CancelDeleteButton>
          <ConfirmDeleteButton onClick={props.handleDeleteItem}>Yes, Delete.</ConfirmDeleteButton>
        </DeleteConfirmationCard>
      </TransparentContainer>
    </>
  )
}

export default DeleteConfirmation
