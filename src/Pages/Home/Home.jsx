import './Home.scss'
import{motion} from "framer-motion"
import coder from '../../assets/coder.png'
import scroll from '../../assets/scroll.png'
const Home = () => {
  return (
    <div className="homepg">
        <div className="wrapper">
        <div className="textCont">
            <h2>MINOR</h2>
            <h1>Build something that no one ever thought about</h1>
            <div className="btns">
                <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.94}}>Read About Us</motion.button>
                <motion.button whileHover={{scale:1.1}} whileTap={{scale:0.94}}>Contact us</motion.button>
            </div>
            {/* <img src={scroll} alt="Scroll"></img> */}
        </div>
        </div>
      <img className="bgimg" src={coder} alt="Code"></img>
    </div>
  )
}

export default Home

