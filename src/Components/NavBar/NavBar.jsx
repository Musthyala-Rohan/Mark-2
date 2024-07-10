import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">MR. EV</div>
      <ul className="nav-menu">
        <li className='h'>Home</li>
        <li className='h'>Explore</li>
        <li className='h'>About</li>
        <li className="nav-contact">Contact</li>
      </ul>
    </div>
  );

}
export default NavBar
