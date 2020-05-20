import { login } from "../actions/index";
const { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, HANDLE_INPUT } = login;
const initialState = {
  credentials: {
    username: "",
    password: "",
  },
  isLoading: false,
  helloWorld: "Hello, world!",
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        credentials: initialState.credentials,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        credentials: {
          password: initialState.credentials.password,
        },
      };
    case HANDLE_INPUT:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          [action.payload.name]: action.payload.value,
        },
      };
    
    default:
      return state;
  }
};
