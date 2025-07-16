
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const addFavorite = (user: unknown) => ({ type: ADD_FAVORITE, payload: user }); 
export const removeFavorite = (id: number) => ({ type: REMOVE_FAVORITE, payload: id });
    