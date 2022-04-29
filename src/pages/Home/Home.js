import React from 'react';
import { InfoSection } from '../../components';
import { homeObjectOne } from './Data';

const Home = () => {
  return <InfoSection {...homeObjectOne} />;
};

export default Home;
