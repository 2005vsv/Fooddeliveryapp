import React, { createContext, useReducer, useContext } from "react";

// 1️⃣ Create Context
const SignupContext = createContext();

// 2️⃣ Initial State
const initialState = {
  name: "",
  email: "",
  password: "",
};

// 3️⃣ Reducer
const signupReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload.value };
    case "EMAIL":
      return { ...state, email: action.payload.value };
    case "PASSWORD":
      return { ...state, password: action.payload.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// 4️⃣ Provider Component
export const SignupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(signupReducer, initialState);

  return (
    <SignupContext.Provider
      value={{
        name: state.name,
        email: state.email,
        password: state.password,
        registerdispatch: dispatch,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

// 5️⃣ Custom Hook to Use Context
export const useregister = () => useContext(SignupContext);

