import './Button.css'
export default function Button({ handleClick, text }) {
  return (
    <button className="common" onClick={handleClick}>{text}</button>
  )
}