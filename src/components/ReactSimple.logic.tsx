import { useState } from 'react'

const ReactSimpleLogic = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [isAdmin, setIsAdmin] = useState(false)
  const [users, setUsers] = useState<string[]>([ "John", "Jane", "Doe" ])
     const addUser = (user: string) => {
    setUsers([...users, user])
  }
  return (
    <div>
       {/* controled elements */}
        <p>Users: {users.length}</p>
       <p>{name}</p>
       <input type="text" value={name} onChange={(e) => setName( e.target.value )} />
       <p>{age}</p>
       <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
       <p>{isAdmin ? "Admin" : "Not Admin"}</p>
       <button onClick={() => setIsAdmin(!isAdmin)}>Toggle Admin</button>
       <button onClick={() => addUser("New User")}>Add User</button>
    </div>
  )
}

export default ReactSimpleLogic
