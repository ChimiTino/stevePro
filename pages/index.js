import Head from 'next/head'
import { useEffect ,useState} from 'react'
import Image from 'next/image'
import Link from 'next/Link'
import * as RiIcon from "react-icons/ri"
import styles from '../styles/Home.module.css'
import HomeNav from '../Components/Home/HomeNav'
import Gallery from '../Components/Home/Gallery'
import Contact from '../Components/Home/Contact'


function Home() {
  const [loading, setLoading] = useState(false)
  const [onMenu, setOnMenu] = useState(false)
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
    : 
  <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main>
      <div >
      <p className={ onMenu ? styles.theMenu : "opp"} ><RiIcon.RiCloseFill onClick = {() => setOnMenu(i => !i)}/></p>
      <p className={onMenu?  "opp":styles.theX } ><RiIcon.RiMenu4Line onClick = {() => setOnMenu(i => !i)}/></p>
      

      <div className={onMenu? styles.mobilesNav: "opp"}>
        
      <ul> 
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/gallery'>Gallery</Link></li>
          <Link href='/#contact' onClick={()=> setOnMenu(false)}><li>Contact</li></Link>
          <li><Link href='/about'>About Me</Link></li>
        </ul>
      </div></div>
      <div  onClick={()=> setOnMenu(false)}>
      <HomeNav/>
      <Gallery/>
      <Contact/>
      </div>
     </main>
    </div>}
    
    </>
  )
}
export default Home