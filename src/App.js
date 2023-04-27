import Header from './components/Header/Header'
import Card from './components/Todo/Card';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { add, removeTodo, editTodo } from './features/todo/todoSlice';


function App() {
  const todo = useSelector((state) => state.todo.value)
  const dispatch = useDispatch()

  function handleAddTodo(text) {
    dispatch(add(text))
  }

  function deleteTodo(removeTodoID) {
    dispatch(removeTodo(removeTodoID))
  }

  function updateTodo(todoId, newValue, status) {
    dispatch(editTodo({ id: todoId, title: newValue, isDone: status }))
  }

  localStorage.setItem('todo', JSON.stringify(todo));

  return (
    <div className="container">
      <Header />
      <Card todo={todo} handleAddTodo={handleAddTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}
export default App;
