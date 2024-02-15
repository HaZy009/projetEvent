'use client'
import React from 'react'
import styles from './page.module.css'
import Formulaire from '@/components/formulaire/Formulaire'

const Contact = () => {
  return (
    <div className={styles.general}>
      <Formulaire />

      
      <div className={styles.informations}>
        <ul>
          <a>contact@festall.com</a>
        </ul>
        <ul>
          <a>613-XXX-XXXX</a>
        </ul>
      </div>
    </div>
  )
}

export default Contact

