'use client'
import React from 'react'
import Styles from './Links.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tab = [
    {
        title:'Home', 
        path:'/'
    },
    {
        title:'Evenement 1', 
        path:'/event1'
    },
    {
        title:'Evenement 2', 
        path:'/event2'
    },
    {
        title:'Contact', 
        path:'/contact'
    }
]

const Links = () => {
    const pathName = usePathname();
    // (a>b) ? a : b si a plus grand b alor a sinon b
    // (a>b) && a si plus grand b affiche a sinon rien
  return (
    <div className={Styles.container}>
        {
            tab.map( (element, index) => (
                <Link 
                className={pathName === element.path ? `${Styles.active}`: ''}
                key={index} href={element.path}>{element.title}</Link>
            ))
        }
    </div>
  )
}

export default Links