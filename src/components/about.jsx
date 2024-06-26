 import { useRef } from "react"
import "./about.css"
import { motion, useScroll, useTransform } from "framer-motion"



const About = ({ type }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref
        // offset: ["start start", "end start"]
    }
    );

const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])


return (
    <div className="about"
        ref={ref}
        style={{
            background: type === "services"
                ? "linear-gradient(180deg, #111132, #0c0c1d)"
                : "linear-gradient(180deg, #111132, #505064,)",
        }}
     >
        <motion.h1 style={{ y: yText }}>{type == "service" ? "what we do" : "what we did?"}</motion.h1>
        <motion.div className="mountains"></motion.div>
        < motion.div stayle={{y:yBg}} className="planets" style={{backgroundImage: `url(${type=== "services"?"/planets.png" : "/sun.png"})`
    }}></ motion.div>
        <motion.div stayle={{x:yBg}} className="stars"></motion.div>


    </div>
)
}

export default About;