import React,{useState} from 'react'
import styles from '../../styles/Work.module.css'
import * as RiIcon from "react-icons/ri"
import Link from 'next/link'

function MoblieNav(onMenu, setOnMenu) {
 
  return (
    <div >
      <p className={ onMenu ? styles.theMenu : "opp"} ><RiIcon.RiCloseFill onClick = {() => setOnMenu(i => !i)}/></p>
      <p className={onMenu?  "opp":styles.theX } ><RiIcon.RiMenu4Line onClick = {() => setOnMenu(i => !i)}/></p>
      

      <div className={onMenu? styles.mobilesNav: "opp"}>
        
      <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/gallery'><li>Gallery</li></Link>
          <a href='/#contact'><li>Contact</li></a>
          <Link href='/about'><li>About Me</li></Link>
        </ul>
      </div></div>
  )
}

export default MoblieNav