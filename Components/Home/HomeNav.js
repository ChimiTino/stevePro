import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { slideList } from "../PhotoList/photoList";
import Carousel from 'react-bootstrap/Carousel'
import img from '../../public/Capture.PNG'

//const divStyle ={
 // backgroundImage: URL()
//}


// <ul>
//<Link href='/'><li>Home</li></Link>
///<Link href='/gallery'><li>Gallery</li></Link>
//<Link href='/#contact' scroll={true}><li>Contact</li></Link>
//<Link href='/about'><li>About Me</li></Link>
//</ul>

function HomeNav() {
  return (
    <div className={styles.container} style={{backgroundImage: `url(/KDNVD.PNG)`}}>
     
<span className='gradiant'></span>

    <nav className={styles.nav}>
       <Link href='/'>
       <div className={styles.logo}>
       
        <span className='s-logo'>
          s
        </span>
        <span className='j-logo'>
          j
        </span>
      </div>
      </Link>
      <div className={styles.navlist}>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
          <li><Link href='/#contact' scroll={true}>Contact</Link></li>
          <li><Link href='/about'>About Me</Link></li>
        </ul>
      </div>
    </nav>
     
     <div className={styles.homeCont}>
        <div className={styles.slides}>
        <Carousel>
          {slideList.map((item)=>{
            return(
            <Carousel.Item key={item.id}>
              <div className={styles.slide}>
                <img src={item.photo} alt={item.title}/>
                <p>{item.title}</p>
              </div>
          </Carousel.Item>
          )
          })} 
        </Carousel>
        </div>
        <div className={styles.details}>
          <header className={styles.header}>
            <h1>Steve Johnson</h1>
            <div className={styles.line}></div>
            <h3>I'M STEVE JOHNSON, A FREELANCE ILLUSTRATOR & GRAPHIC DESIGNER . I HAVE MORE THAN THREE YEARS OF AGENCY EXPERIENCE AND HAVE PRIMARILY CENTERED ON ILLUSTRATION, BRANDING, AND IDENTITY PROJECTS.</h3>
            <button className={styles.button}>
              <Link href='/about'>Read More</Link>
              
              </button>
          </header>

        </div>

     </div>
  
    </div>
  )
}

export default  HomeNav