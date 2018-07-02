import React from 'react'

import NavItem from './NavItem/NavItem'

import styles from './NavBar.css'

const navBar = () => (
  <nav className={styles.NavBar}>
    <h1>SGGen</h1>
    <ul className={styles.NavBarItems}>
      <NavItem link="/" exact>Home</NavItem>
      <NavItem link="/styleguide" exact>Style Guide</NavItem>
    </ul>
  </nav>
)

export default navBar
