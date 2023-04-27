import './Card.css'
import List from "./List"
import Button from '../Common/Button'
import { useState } from 'react'
export default function Card({ todo, handleAddTodo, deleteTodo, updateTodo }) {

  const [val, setVal] = useState('')
  const [err, setErr] = useState({
    isError: false,
    errorMsg: ''
  })
  function onAddTodo() {
    const checkVal = val.trim();
    if (checkVal === "" || checkVal.length > 60) {
      checkVal.length > 60 ? setErr({ isError: true, errorMsg: 'Only 60 Character long Text is allowed !' }) : setErr({ isError: true, errorMsg: 'Empty Todo Not allowed !' });
      setTimeout(() => {
        setErr({ isError: false, errorMsg: '' });
      }, 5000);
      return;
    }
    handleAddTodo(val)
    setVal('');
  }

  return (
    <div className='card_wrap'>
      <section className={`add_todo_section ${err.isError ? 'error-wrap' : ''}`}>
        <div className="left-wrap">
          <label htmlFor="add">Add Todo</label>
          <input type="text" id='add' className='add_todo' value={val} onChange={e => setVal(e.target.value)} />
        </div>
        < Button handleClick={onAddTodo} text={'Add'} styleClass={"add"} />
        {err.isError && <p className='error'>{err.errorMsg}</p>}
      </section>
      <section className='list_section'>
        <ul>
          {todo.length > 0 ? todo.map((item) => <List todoDetail={item} key={item.id} handleDeleteTodo={deleteTodo} handleUpdate={updateTodo} />) : "No todos"}
        </ul>
      </section>

    </div >
  )
}