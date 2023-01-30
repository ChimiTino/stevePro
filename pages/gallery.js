import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import GalleryPg from '../Components/Gallery/GalleryPg'
import styles from '../styles/Work.module.css'
import * as   RiIcon from 'react-icons/ri'
import * as AiIcons from 'react-icons/ai'
import { useCallback } from 'react'





export default function Gallery() {
  const[togslide, setTogslide] = useState(false);
 
  const [onMenu, setOnMenu] = useState(false);

const Menu = useCallback(()=>{
  setOnMenu(n => false);
},[onMenu])

  return (

    <>
   
    <div >
      <div >
      <p className={ onMenu ? styles.theMenu : "opp"} ><RiIcon.RiCloseFill onClick = {() => setOnMenu(i => !i)}/></p>
      <p className={onMenu?  "opp":styles.theX } ><RiIcon.RiMenu4Line onClick = {() => setOnMenu(i => !i)}/></p>
      

      <div className={onMenu? styles.mobilesNav: "opp"}>
        
      <ul>
        <li><Link href='/'>Home</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
          <Link href='/#contact' scroll={true}><li>Contact</li></Link>
          <li><Link href='/about'>About Me</Link></li>
        </ul>
      </div></div>

    <div onClick={Menu}> 
      <nav className={styles.nav}>
       
       <div className={styles.logo}>
       
        <Link href= "/">
        <span className='s-logo'>
          s
        </span>
        <span className='j-logo'>
          j
        </span>
        </Link>
        
      </div>
     
      <div className={styles.navlist}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
          <Link href='/#contact' scroll={true}><li>Contact</li></Link>
          <li><Link href='/about'>About Me</Link></li>
        </ul>
      </div>
    </nav>
        <GalleryPg 
        setSwitch={setTogslide}
        togslide={togslide}
        />
        
        <div className={styles.footer}>
          <div className={styles.line3}></div>
          <span><AiIcons.AiFillInstagram/> <AiIcons.AiFillFacebook/> <AiIcons.AiFillTwitterSquare/></span> 
          <p>©2022 TinotendaChibidesign. All Rights Reserved</p>
        </div>
        <div onClick={()=>{
          setTogslide(false)
        }}  className={togslide ?  styles.background: styles.noBackgroung}></div>
    </div> </div>
  </>
  )
}

