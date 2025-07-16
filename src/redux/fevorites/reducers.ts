/* eslint-disable @typescript-eslint/no-explicit-any */
import { ADD_FAVORITE, REMOVE_FAVORITE } from './actions';

const favoritesReducer = (state: any[] = [], action: any) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
