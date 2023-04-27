import { createSlice } from "@reduxjs/toolkit";

const localData = JSON.parse(localStorage.getItem('todo'));
let data = []
if (localData) { data = localData }

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: data
  },
  reducers: {
    add: (state, action) => {
      const newId = Date.now();
      state.value = [{ id: newId, title: action.payload }, ...state.value]
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    },
    editTodo: (state, action) => {
      const transformed = state.value.map((item) => {
        if (item.id === action.payload.id) {
          return { id: action.payload.id, title: action.payload.title }
        }
        else {
          return item
        }
      })
      state.value = transformed;
    }
  }
})

export const { add, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer
