import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.css'
export default function Navbar() {
  return (
   <nav>
    <ul>
      <li><Link className={style.navbarLink} to={'/'}>Home</Link></li>
      <li><Link className={style.navbarLink} to={'/products'}>Products</Link></li>
      <li><Link className={style.navbarLink} to={'/login-register'}>Login/Register</Link></li>
    </ul>
   </nav>
  );
}
