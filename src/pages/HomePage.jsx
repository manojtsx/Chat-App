import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const HomePage = () => {
  const {loggedInUser} = useContext(UserContext);
  return (
    <div>{loggedInUser.name}</div>
  )
}

export default HomePage