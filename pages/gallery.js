import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import GalleryPg from '../Components/Gallery/GalleryPg'
import styles from '../styles/Work.module.css'
import * as   RiIcon from 'react-icons/ri'
import * as AiIcons from 'react-icons/Ai'
import MoblieNav from '../Components/Gallery/moblieNav'




export default function gallery() {
  const[togslide, setTogslide] = useState(false);
  const [loading, setLoading] = useState(false);
  const [onMenu, setOnMenu] = useState(false);

useEffect(()=>{
setLoading(true)
setTimeout(() => {
  setLoading(false)
}, 3000);
},[])


  return (

    <>
    {loading ? 
   <div className={styles.gif}>
   <p className='s-logo'>s</p>
   <p className='j-logo'>j</p>
     </div>
    : 
    <div >
      <div >
      <p className={ onMenu ? styles.theMenu : "opp"} ><RiIcon.RiCloseFill onClick = {() => setOnMenu(i => !i)}/></p>
      <p className={onMenu?  "opp":styles.theX } ><RiIcon.RiMenu4Line onClick = {() => setOnMenu(i => !i)}/></p>
      

      <div className={onMenu? styles.mobilesNav: "opp"}>
        
      <ul>
        <li><Link href='/'>Home</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
          <a href='/#contact'><li>Contact</li></a>
          <li><Link href='/about'>About Me</Link></li>
        </ul>
      </div></div>

    <div onClick={()=> {setOnMenu(false); console.log(onMenu);}}> 
      <nav className={styles.nav}>
       
       <div className={styles.logo}>
       
        <a href= "/">
        <span className='s-logo'>
          s
        </span>
        <span className='j-logo'>
          j
        </span>
        </a>
        
      </div>
     
      <div className={styles.navlist}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
          <a href='/#contact'><li>Contact</li></a>
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
    </div> </div>}
    
  </>
  )
}

