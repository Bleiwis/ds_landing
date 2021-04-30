import { GET_USER_METADATA, CREATE_USER, LIST_USERS } from "../actions/userActions";

const initialState = {
  metadata: [],
  submitForm: [],
  listUsers: [],
  isLoading: false,
  error: null,
}

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case GET_USER_METADATA:
      return {
        ...state,
        metadata: action.payload,
        isLoading: true
      }
    case CREATE_USER:
      return {
        ...state,
        submitForm: action.payload,
        isLoading: false,
      }
      case LIST_USERS:
        return {
          ...state,
          listUsers: action.payload,
          isLoading: false
        }
    default:
      return state
  }
}