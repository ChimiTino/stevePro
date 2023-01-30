import {useCallback,useState,useEffect,useRef} from 'react'
import styles from '../../styles/Work.module.css'
import {newList} from '../PhotoList/photoList'
import * as BsIcons from 'react-icons/bs'
import * as HiIcons from 'react-icons/hi'





function GalleryPg({setSwitch,togslide }) {
const[newLists, setNewLists] = useState(newList)
const[number, setNumber] = useState(0)
const filterd = useRef()

const [next, setNext] = useState(true)
const [prev, setPrev] = useState(true)



const switchNo = useCallback ((item) =>{
setNumber(item.no)
setSwitch(true)
},[])



useEffect(()=>{
  console.log(newLists);
})
useEffect(() =>{
  if(number === 0){
    setPrev(false)
  }else{
    setPrev(true)
  }

  if (number === newLists.length - 1) {
     setNext(false)
  }else{
    setNext(true)
  }

    
  },[number])

  return (
    <>
    <div className={togslide ? styles.slidesContaianer :styles.slidesConOf} >
        <div className={styles.slide} >
          <div className={prev ? "leftclick": "leftclick-none"} onClick={()=>{
            setNumber(n=> n - 1);
            
          }}><HiIcons.HiOutlineChevronLeft/></div>
            <div className={styles.slideItem}>
              <div className={styles.photoCont}>
                <img src={newList[number].photo} className={styles.photoSlide}/>
               </div> 
               <div className={styles.info}>
                 <h3>{newList[number].title}</h3>
                 <p>{newList[number].mediam}</p>
                </div>
                
            </div>
          <div className={next ? "rightclick" : "rightclick-none"} onClick={()=>{
            setNumber(n => n + 1 )
            
          }}><HiIcons.HiOutlineChevronRight/>
          </div>
          <span className='theX' onClick ={ useCallback=( ()=>{
            setSwitch(false)
          },[])}>&times;</span>
        </div>
          
      </div>
    <div className={styles.position}>  
    <div className={styles.filter}> 
    <header><h1>My Work</h1></header>
    </div>
    <div>
    <div className={styles.container}>
      <div className={styles.choice}>
        <h4>Filter <BsIcons.BsFilterLeft className='filter'/></h4>
        <div className={styles.filterd}>
          <button
          onClick={() => {
           setNewLists(newList)
          }}
          >All</button>
          <button
          className='theO'
           ref={filterd} 
           onClick ={(e)=>{
            const name = document.querySelector('.theO').innerHTML;
            setNewLists(newList.filter((item) => item.mediam === name))
          }}>Oil Painting</button>
          <button
          className='theA'
          onClick ={()=>{
            setNewLists(newList)
            const name = document.querySelector('.theA').innerHTML;
            setNewLists(newList.filter((item) => item.mediam === name))
          }}
          >Acrylic Painting
          </button>

          <button
          className='theD'
          onClick ={()=>{
            setNewLists(newList)
            const name = document.querySelector('.theD').innerHTML;
            setNewLists(newList.filter((item) => item.mediam === name))
          }}
          >Digital Illistration
          </button>
        </div>
      </div>
      <div className={styles.pictures}>
      {newLists.map((item)=>{

        return(
          <li key={item.no} onClick={useCallback= ( ()=>{
            switchNo(item)
          },[])}>
          <img src={item.photo} alt={item.title} className={styles.images}/>
          </li>
        )
      })}
      </div>
    </div>
      
    </div></div>
  </>)
}

export default GalleryPg