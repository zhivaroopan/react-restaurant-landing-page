/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    default:
      return state;
  }
};
export const UserProvider = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, { username: null });

  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  return useContext(UserContext);
};
