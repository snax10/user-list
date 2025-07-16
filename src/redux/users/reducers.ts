import type { AnyAction } from 'redux-saga';
import type { UsersState } from './types/users.types';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './actions';


const initialState: UsersState = {
  loading: false,
  users: [],
  error: null,
};


const usersReducer = (state: UsersState = initialState, action: AnyAction): UsersState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case FETCH_USERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
