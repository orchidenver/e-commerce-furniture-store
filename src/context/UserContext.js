import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  const context = {
    loginWithRedirect,
    logout,
    myUser
  };

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  )
}


export const useUserContext = () => {
  return useContext(UserContext);
}
