import './List.css';
import Button from '../Common/Button';
import { useState } from 'react';


export default function List({ todoDetail, handleDeleteTodo, handleUpdate }) {
  const [editing, setEditing] = useState(false)
  const [currentVal, setCurrentVal] = useState(todoDetail.title)
  const [err, setErr] = useState({
    isError: false,
    errorMsg: ''
  })

  function handleOnDelete() {
    handleDeleteTodo(todoDetail.id);
  }

  function editTodo() {
    setEditing(true);
  }

  function updateTodo() {

    const checkVal = currentVal.trim();
    if (checkVal === "" || checkVal.length > 60) {
      checkVal.length > 60 ? setErr({ isError: true, errorMsg: 'Only 60 Character long Text is allowed !' }) : setErr({ isError: true, errorMsg: 'Empty Todo Not allowed !' });
      setTimeout(() => {
        setErr({ isError: false, errorMsg: '' });
      }, 5000);
      return;
    }
    handleUpdate(todoDetail.id, currentVal, todoDetail.isDone);
    setEditing(false)
  }

  function handleCheckbox(status) {
    if (status) {
      handleUpdate(todoDetail.id, currentVal, true)
    }
    else {
      handleUpdate(todoDetail.id, currentVal, false)
    }
  }

  return (
    <li className={`${err.isError ? 'error-wrap' : ''}`}>
      <div className="content_wrap">
        <input className='checkbox' type="checkbox" onChange={e => handleCheckbox(e.target.checked)} defaultChecked={todoDetail.isDone} />
        {editing ? <input className='editInput' type="text" value={currentVal} onChange={e => setCurrentVal(e.target.value)} /> : <h2 style={{ textDecoration: `${todoDetail.isDone ? 'line-through' : 'none'} ` }}>{currentVal}</h2>}
        {err.isError && <p className='error'>{err.errorMsg}</p>}
      </div>
      <div className="control_wrap">
        {editing ? <Button text={'Update'} handleClick={updateTodo} styleClass={'update'} /> : <Button text={'Edit'} handleClick={editTodo} styleClass={'edit'} />}

        {!editing && <Button text={'Delete'} handleClick={handleOnDelete} styleClass={'delete'} />}
      </div>
    </li >
  )
}