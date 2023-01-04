import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { lotsSlice } from "./slices/lotsSlice";
import { usersSlice } from "./slices/usersSlice";
import { rootSaga } from "../saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    [lotsSlice.name]: lotsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
