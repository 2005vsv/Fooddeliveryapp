import { createContext, useContext, useReducer } from "react";

const LoginContext = createContext();

const initialState = {
  email: "",
  password: "",
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user")) || null,
};

function reducer(state, action) {
  switch (action.type) {
    case "EMAIL":
      return { ...state, email: action.payload.value };
    case "PASSWORD":
      return { ...state, password: action.payload.value };
    case "TOKEN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        email: "",
        password: "",
        token: null,
        user: null,
      };
    default:
      return state;
  }
}

export function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={{ ...state, logindispatch: dispatch }}>
      {children}
    </LoginContext.Provider>
  );
}

export function uselogin() {
  return useContext(LoginContext);
}
