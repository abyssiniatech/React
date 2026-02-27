import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  title: string
  completed: boolean
  dueDate?: string
}

interface TodoState {
  items: Todo[]
  filter: 'all' | 'completed' | 'active'
}

const initialState: TodoState = {
  items: [],
  filter: 'all',
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.items.push(action.payload)
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.items = state.items.filter(t => t.id !== action.payload)
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.items.find(t => t.id === action.payload)
      if (todo) todo.completed = !todo.completed
    },
    updateTodo(state, action: PayloadAction<{ id: string; title: string }>) {
      const todo = state.items.find(t => t.id === action.payload.id)
      if (todo) todo.title = action.payload.title
    },
    setFilter(state, action: PayloadAction<TodoState['filter']>) {
      state.filter = action.payload
    },
  },
})

export const {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
  setFilter,
} = todoSlice.actions

export default todoSlice.reducer