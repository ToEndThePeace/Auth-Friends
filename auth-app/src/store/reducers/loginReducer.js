import { login } from "../actions/index";
const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } = login;
const initialState = {
  credentials: {
    username: "banana",
    password: "",
  },
  helloWorld: "Hello, world!",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
