import React from 'react'
import Styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <img className={Styles.image} src="/festall-logo.PNG" alt="Festall Logo"/>
    </div>
  )
}

export default Footer