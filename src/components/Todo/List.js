import './List.css';
import Button from '../Common/Button';
import { useState } from 'react';


export default function List({ todoDetail, handleDeleteTodo, handleUpdate }) {
  const [editing, setEditing] = useState(false)
  const [currentVal, setCurrentVal] = useState(todoDetail.title)

  function handleOnDelete() {
    handleDeleteTodo(todoDetail.id);
  }

  function editTodo() {
    setEditing(true);
  }

  function updateTodo() {
    handleUpdate(todoDetail.id, currentVal);
    setEditing(false)
  }

  return (
    <li>
      <div className="content_wrap">
        <input type="checkbox" />
        {editing ? <input type="text" value={currentVal} onChange={e => setCurrentVal(e.target.value)} /> : <h2>{currentVal}</h2>}


      </div>
      <div className="control_wrap">
        {editing ? <Button text={'Update'} handleClick={updateTodo} /> : <Button text={'Edit'} handleClick={editTodo} />}

        <Button text={'Delete'} handleClick={handleOnDelete} />
      </div>
    </li>
  )
}