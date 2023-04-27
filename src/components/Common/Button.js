import './Button.css'
export default function Button({ handleClick, text, styleClass }) {
  return (
    <button className={`${styleClass} common`} onClick={handleClick}>{text}</button>
  )
}