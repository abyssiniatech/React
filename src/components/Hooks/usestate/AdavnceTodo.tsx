import { useState } from 'react'

type Status = 'todo' | 'in-progress' | 'done'
type Priority = 'low' | 'medium' | 'high'

interface Task {
  id: string
  title: string
  status: Status
  priority: Priority
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState('')

  const addTask = () => {
    if (!title.trim()) return
    setTasks(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        status: 'todo',
        priority: 'medium',
      },
    ])
    setTitle('')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Smart Task Manager</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="border p-2 rounded w-full"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="New task..."
        />
        <button
          onClick={addTask}
          className="bg-indigo-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map(task => (
          <li
            key={task.id}
            className="bg-white p-3 rounded shadow flex justify-between"
          >
            <span>{task.title}</span>
            <button
              onClick={() =>
                setTasks(prev =>
                  prev.map(t =>
                    t.id === task.id ? { ...t, status: 'done' } : t
                  )
                )
              }
              className="text-green-600"
            >
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}