import React,{useEffect, useState} from 'react'
import Link from 'next/Link'
import styles from '../styles/Work.module.css'
import * as AiIcons from 'react-icons/Ai'

function About() {
  const [loading, setLoading] = useState(false)
  useEffect (()=>{
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
    : <>
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
          <li><Link href='/contact'>Contact</Link></li>
          <li><Link href='/about'>About Me</Link></li>
        </ul>
      </div>
    </nav>
    <div>
      <main className={styles.aboutMe}>
          <div className={styles.profilePic}>
            <img className={styles.paint} src='/Capture.PNG'/>
            <div className='profileCir'>
              <img src='/toppng.com-12-tips-every-it-guy-should-know-man-with-laptop-1000x972.png'/>
            </div>
              
          </div>
        <header>
          <h1>About Me</h1>
          <p><b>I'm Steve Johnson, a free-lance illustrator and graphic designer from Winnipeg, Canada. I have more than three years of agency experience and have focused primarily on projects involving branding and identity as well as illustration work.</b>
          <br/><br/><br/>
          I watched a ton of animations as a child and was always in awe of beautifully illustrated books, which ultimately paved the way for me to pursue careers as a designer and illustrator. Being a cat mom, a video game nerd, and trying to spend as much time outside as possible keep me busy when I'm not at my laptop.
          </p>

        </header>
      </main>
      <div className='linesM'></div>
      <div className={styles.credit}>
        <div className={styles.experiance}>
          <h1>Experiance</h1>
            <h4>Green Financial</h4>
            <p>Graphic Designer
              <br/>
              2021 - Present
            </p>
            <h4>Brainish Agency</h4>
            <p>Graphic Designer
              <br/>
              2019 - 2021
            </p>
            <h4>MissTheDishes</h4>
            <p>Graphic Designer
              <br/>
              2018 - 2019
            </p>
        </div>
        <div className={styles.education}>
        <h1>Education</h1>
            <h4>Green Financial</h4>
            <p>Graphic Design program
              <br/>
              2015 - 2017
            </p>
            <h4>Motion Design School</h4>
            <p>Motion Beast Animation in After Effects
              <br/>
              2019 - 2021
            </p>
            <h4>Webflow University</h4>
            <p>Ultimate web design course
              <br/>
              2021
            </p>
        </div>
      </div>
    </div>
    <div className={styles.footer}>
          <div className={styles.line3}></div>
          <span><AiIcons.AiFillInstagram/> <AiIcons.AiFillFacebook/> <AiIcons.AiFillTwitterSquare/></span> 
          <p>©2022 TinotendaChibidesign. All Rights Reserved</p>
        </div>
        </>}
    
    </>
  )
}

export default About