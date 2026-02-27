import { configureStore } from '@reduxjs/toolkit'
import { combineForms } from 'react-redux-form'
import todoReducer from '../features/todos/todoSlice'

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    forms: combineForms({
      todoForm: {
        title: '',
        dueDate: null,
      },
    }),
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch