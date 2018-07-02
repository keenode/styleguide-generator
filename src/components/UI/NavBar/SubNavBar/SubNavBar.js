import React from 'react'
import { NavLink } from 'react-router-dom'

import NavItem from '../NavItem/NavItem'

import styles from './SubNavBar.css'

const subNavBar = () => (
  <nav className={styles.SubNavBar}>
    <div className={styles.Container}>
      <ul className={styles.SubNavBarItems}>
        <NavItem link="/styleguide/headings">Headings</NavItem>
      </ul>
    </div>
  </nav>
)

export default subNavBar
