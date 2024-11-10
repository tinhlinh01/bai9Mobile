import React, { createContext, useState, useContext } from 'react';

// Create the context
const PhoneContext = createContext();

// Create a custom hook to use the context
export const usePhone = () => {
  return useContext(PhoneContext);
};

// Create the context provider component
export const PhoneProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <PhoneContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};
