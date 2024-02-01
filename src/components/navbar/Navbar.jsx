import React from 'react'
import Links from './links/Links'
import Styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.logo}>LOGO</div>
        <Links/>
    </div>
  )
}

export default Navbar