export const loginreducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };
    case "TOKEN":
      return {
        ...state,
        token: payload.token,
      };

    default:
      return state;
  }
};
