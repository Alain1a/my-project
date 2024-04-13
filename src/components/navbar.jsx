
import "./navbar.css";
import "./sidebar.css";  

import {motion} from "framer-motion";
import Sidebar from "./sidebar";

const Navbar = () => {

    return(
    <div className="navbar">
        <div className="wrapper">
            < motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:5}}
            style={{fontFamily:"-moz-initial", marginLeft:"200px"}}>

                </ motion.span>
                <Sidebar/>
            
            {/* <div className="social flex">
                <a href="#"><img src="/facebook.jpeg" alt="" /></a>
                <a href="#"><img src="/instagram.jpeg" alt="" /></a>
                <a href="#"><img src="/youtube.png" alt="" /></a>
                <a href="#"><img src="/Dribble.jpeg" alt="" /></a>
            </div> */}
        </div>
    </div>
)

}

export default Navbar;