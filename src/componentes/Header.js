import React from 'react';


const Header = (props) =>{
  return(
    <div>
      <nav className="nav-wrapper ligth-blue darken-2">
        <a className="brand-logo">{props.titulo}</a>
      </nav>
    </div>
  )
}


export default Header;