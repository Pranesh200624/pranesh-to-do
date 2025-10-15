import { createSlice } from "@reduxjs/toolkit";

const todolistSlice = createSlice({
  name: "todolist",
  initialState: { list: [] },
  reducers: {
    addTask: (state, action) => { state.list.push(action.payload); },
    removeTask: (state, action) => { state.list = state.list.filter(task => task !== action.payload); },
    clearAll: (state) => { state.list = []; }
  }
});

export const { addTask, removeTask, clearAll } = todolistSlice.actions;
export default todolistSlice.reducer;
