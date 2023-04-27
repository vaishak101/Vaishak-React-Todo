import './Header.css';
import Logo from '../../assets/V-studio.webp'
function Header() {
  return (
    <header className='header'>
      <div className='logo_wrap'>
        <img src={Logo} alt="V-studio" className='cursor-pointer' />
      </div>
      <div className="title_wrap">
        <h1 className='title'>React Todo App</h1>
      </div>
    </header>
  )
}

export default Header;