import './Card.css'
import List from "./List"
import Button from '../Common/Button'
import { useState } from 'react'
export default function Card({ todo, handleAddTodo, deleteTodo, updateTodo }) {

  const [val, setVal] = useState('')

  function onAddTodo() {
    if (val === "" || val.length < 2) return
    handleAddTodo(val)
    setVal('');
  }

  return (
    <div className='card_wrap'>
      <section className="add_todo_section">
        <input type="text" className='add_todo' value={val} onChange={e => setVal(e.target.value)} />
        < Button handleClick={onAddTodo} text={'Add'} />
      </section>
      <section className='list_section'>
        <ul >
          {todo.length > 0 ? todo.map((item) => <List todoDetail={item} key={item.id} handleDeleteTodo={deleteTodo} handleUpdate={updateTodo} />) : "No todos"}
        </ul>
      </section>

    </div>
  )
}