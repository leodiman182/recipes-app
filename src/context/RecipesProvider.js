import PropTypes from 'prop-types';
import React, { useState } from 'react';
import RecipesContext from './RecipesContext';

function RecipesProvider({ children }) {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const context = {
    isButtonDisabled,
    setIsButtonDisabled,
    userEmail,
    setUserEmail,
    password,
    setPassword,
    searchResults,
    setSearchResults,
    loading,
    setLoading,
  };

  return (

    <RecipesContext.Provider value={ context }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default RecipesProvider;
