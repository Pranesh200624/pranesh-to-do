import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./Todolistslice";

const store = configureStore({
  reducer: { todolist: todolistReducer }
});

export default store;
