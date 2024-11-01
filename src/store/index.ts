import { configureStore } from "@reduxjs/toolkit";
import pageAnimateSlice from "./pageAnimateSlice";
import deploymentStore from "./deploymentSlice";

export const store = configureStore({
    reducer:{
        pageAnimate: pageAnimateSlice,
        deploymentStore
    }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;