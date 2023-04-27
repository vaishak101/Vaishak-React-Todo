import Logo from '../../assets/V-studio.webp'
function Header() {
  return(
    <header className='py-4 flex items-center justify-between'>
      <div className='w-20 h-20 rounded-full overflow-hidden '>
      <img src={Logo} alt="V-studio" className='cursor-pointer'/>
      </div>
      <h1 className=' text-3xl font-bold ease-in duration-300 hover:text-bermuda'>Todo React App</h1>
    </header>
  )
}

export default Header;