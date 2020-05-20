import { friends } from "../actions/index";
const {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  HANDLE_INPUT,
  POST_FRIEND_START,
  POST_FRIEND_SUCCESS,
  POST_FRIEND_FAILURE,
} = friends;
const initialState = {
  friends: [],
  newFriend: {
    name: "",
    age: "",
    email: "",
  },
  isFetching: false,
  isPosting: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        friends: action.payload,
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case HANDLE_INPUT:
      return {
        ...state,
        newFriend: {
          ...state.newFriend,
          [action.payload.name]: action.payload.value,
        },
      };
    case POST_FRIEND_START:
      return {
        ...state,
        isPosting: true,
      };
    case POST_FRIEND_SUCCESS:
      return {
        ...state,
        isPosting: false,
        newFriend: initialState.newFriend,
        friends: action.payload,
      };
    case POST_FRIEND_FAILURE:
      return {
        ...state,
        isPosting: false,
      };
    default:
      return state;
  }
};
