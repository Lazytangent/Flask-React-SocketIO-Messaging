import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { logout } from '../../store/session';
import styles from './NavBar.module.css';
import Button from '../Button';

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <nav className={styles.nav}>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {!user ? (
        <div className={styles.unauthContainer}>
          <NavLink to="/login" className={styles.mx2}>Login</NavLink>
          <NavLink to="/signup" className={styles.mx2}>Signup</NavLink>
        </div>
      ) : (
        <>
          <Button onClick={logoutUser} label="Logout" />
        </>
      )}
    </nav>
  );
};

export default NavBar;
