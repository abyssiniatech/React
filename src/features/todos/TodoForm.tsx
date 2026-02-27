import { Control, Form } from 'react-redux-form'
import { useAppDispatch } from '../../app/hooks'
import { addTodo } from './todoSlice'
import { v4 as uuid } from 'uuid'

const TodoForm = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = (values: any) => {
    dispatch(
      addTodo({
        id: uuid(),
        title: values.title,
        completed: false,
        dueDate: values.dueDate,
      })
    )
  }

  return (
    <Form model="forms.todoForm" onSubmit={handleSubmit}>
      <Control.text
        model=".title"
        placeholder="Enter todo"
        required
      />
      <Control.input model=".dueDate" type="date" />
      <button type="submit">Add Todo</button>
    </Form>
  )
}

export default TodoForm