import React from 'react';
import { BrowseAvailableCocktails } from '../../components';
import { homeObjectOne } from './Data';

const UserBrowseCoktails = () => {
  return (
    <>
      <BrowseAvailableCocktails {...homeObjectOne} />
    </>
  );
};

export default UserBrowseCoktails;
