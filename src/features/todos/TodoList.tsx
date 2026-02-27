import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleTodo, deleteTodo } from './todoSlice'

const TodoList = () => {
  const { items, filter } = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  const filtered = items.filter(todo =>
    filter === 'all'
      ? true
      : filter === 'completed'
      ? todo.completed
      : !todo.completed
  )

  return (
    <ul>
      {filtered.map(todo => (
        <li key={todo.id}>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.title}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList