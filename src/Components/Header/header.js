  import React from "react"
  import './header.css'
  import logo from './logo/logo.png'

  
  const Navbar = () => {
    return(
    <div className='head1'>
      <img className='logo1' src={logo} alt='shelfie logo'/>
      <h1>shelfie</h1>
    </div>
    )}

  export default Navbar;