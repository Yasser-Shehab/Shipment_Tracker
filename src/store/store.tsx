import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from './shipment';
import languageReducer from './language';

export const store = configureStore({
  reducer: { shipment: shipmentReducer, language: languageReducer },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
