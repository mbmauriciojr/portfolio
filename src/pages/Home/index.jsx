import React from 'react';

import MenuHeader from '../../components/MenuHeader';

const Home = () => {
  const initialPhrase = 'Construindo o website de Marcelo Maurício';

  return (
    <>
      <MenuHeader />
      <span>{initialPhrase}</span>
    </>
  );
};

export default Home;
