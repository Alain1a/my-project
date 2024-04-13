import "./hero.css";
import { motion } from "framer-motion";
const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButon: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants}
                    initial="initial"
                    animate="animate">
                    <motion.h2 variants={textVariants}>Shema Alain</motion.h2>
                    <div >
                        <motion.h1 variants={textVariants} >Software engineer</motion.h1>
                        <motion.h1 variants={textVariants} >Full stack developer</motion.h1>
                    </div>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See the Latest Work</ motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    
                </motion.div>
            </div>
            < motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                SoftWare Engineer Full Stack Developer
            </motion.div>
            <div className="imageContainer">
                <img src="/Alain.png" alt="" />
            </div>
        </div>
    )
}

export default Hero