import React, { lazy } from 'react'
import { Suspense } from 'react'
import env from 'env'
const TodoInput789 = lazy(() => import('./components/TodoInput789'))
const TodoItem789 = lazy(() => import('./components/TodoItem789'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [refetch, setRefetch] = React.useState(false)

  React.useEffect(() => {
    fetch(`${env.BLOX_FUNCTION_URL}/listTodo789`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data ? data.map(({ id, item }) => ({ id, item: item.name })) : [])
        setRefetch(false)
      })
      .catch((err) => console.log(err))
  }, [refetch])
  return (
    <Suspense fallback={<p>loading..</p>}>
      <h1>Container</h1>
      <TodoInput789 refetch={setRefetch} />
      {todos.map((item) => (
        <TodoItem789 refetch={setRefetch} item={item.item} id={item.id} key={item.id} />
      ))}
    </Suspense>
  )
}

export default App
