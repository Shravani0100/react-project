import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/users/userSlice";

//import movieReducer from "../features/movie/movieSlice";

 const store=configureStore({
  reducer: {
    user: userSlice.reducer,
    //movie: movieReducer,
  },
  middleware:  (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export default store;




