import React from 'react'
import styles from '../../styles/Home.module.css'
import {homeGalleryList} from '../PhotoList/photoList'

function Gallery() {
  return (
    <div className={styles.galleryCont}>
      <div className={styles.steve}>
        <div className='circ1'></div>
        <div className='circ2'></div>
        <img src='\toppng.com-working-man-png-work-on-laptop-506x381.png'/>
      </div>
      <div className={styles.gallery}>
        <header>
            <h2>Gallery</h2>
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
          <button> See More</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery