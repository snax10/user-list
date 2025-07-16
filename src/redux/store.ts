import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './users/reducers';
import rootSaga from './users/sagas';
import favoritesReducer from './fevorites/reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    users: usersReducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
