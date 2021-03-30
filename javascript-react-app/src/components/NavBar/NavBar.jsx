import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <nav className={styles.nav}>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
    </nav>
  );
};

export default NavBar;
