import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import NavItem from './NavItem/NavItem'
import SubNavBar from './SubNavBar/SubNavBar'

import styles from './NavBar.css'

const navBar = () => (
  <Fragment>
    <nav className={styles.NavBar}>
      <div className={styles.Container}>
        <NavLink to="/" exact>
          <h1 className={styles.Title}>SGGen</h1>
        </NavLink>
        <ul className={styles.NavBarItems}>
          <NavItem link="/" exact>Home</NavItem>
          <NavItem link="/styleguide">Style Guide</NavItem>
        </ul>
      </div>
    </nav>
    <SubNavBar />
  </Fragment>
)

export default navBar
