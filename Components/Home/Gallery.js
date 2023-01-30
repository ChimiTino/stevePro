import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import {homeGalleryList} from '../PhotoList/photoList'
import * as FaIcons from 'react-icons/fa'
 
function Gallery() {
  return (
    <div className={styles.galleryCont}>
      <div className={styles.steve}>
        <h5><FaIcons.FaQuoteLeft/></h5>
        <h6 className='quotePara'>Simpicity carried to the extreme, becomes elegance</h6>
        <p className='quoteName'>John Franklin</p>
        <div className='circ1'></div>
        <div className='circ2'></div>
        <img src='\toppng.com-working-man-png-work-on-laptop-506x381.png'/>
      </div>
      <div className={styles.gallery}  style={{backgroundImage: `url(\WoodBack.png)`}}>
        <header>
            <h2>My Work</h2>
            <div className={styles.line2}></div>
            </header>
            <div className={styles.flex}>
              {homeGalleryList.map((item)=>{
                return(
                  <div className={styles.cardImg}>
                    <img className={styles.galleryImg} src={item.photo} alt={item.title}/>
                    <p>{item.title}</p>
                  </div>
                  )
              })}
            </div>
        <div className={styles.read}>
          <Link href='/gallery'><button href = '/gallery'> See More</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Gallery