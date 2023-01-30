import React from 'react'
import styles from '../../styles/Home.module.css'
import * as AiIcons from 'react-icons/ai'
function Contact() {
  return (
    <>
    <div className={styles.contactCont} id='contact'>
      <div className={styles.contactInfo}>
        <div className={styles.contPara}>
              <h1>LET'S WORK TOGETHER</h1>
              <p>Feel free to leave me a message via the form, or you can get a hold of me at <b>sjohnsonrdesign@gmail.com. </b> Let's create something beautiful and impactful.</p>
              
        </div>
        <div></div>
        <div className={styles.form}>
            <p>Name:</p>
            <input type='text' name="name" placeholder=''/>
            <p>Number:</p>
            <input type='text' name="tell" placeholder=''/>
            <p>Email:</p>
            <input type='text' name="email" placeholder=''/>
            <p>Message</p>
            <textarea type='' name="message"  />
           </div>
        </div>
       
                 <video src='\backgroung.mp4' autoPlay loop muted  className={styles.video}   />
          <div className={styles.footer}>
          <div className={styles.line3}></div>
          <span><AiIcons.AiFillInstagram/> <AiIcons.AiFillFacebook/> <AiIcons.AiFillTwitterSquare/></span> 
          <p>©2022 TinotendaChibidesign. All Rights Reserved</p>
        </div>
    </div>
    </>
  )
}

export default Contact