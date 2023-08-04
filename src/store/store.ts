import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

{
  /* 
store ka folder bna k store k file ts name se bna k sara code copy kr lia as website se

https://redux-toolkit.js.org/tutorials/quick-start


*/
}
