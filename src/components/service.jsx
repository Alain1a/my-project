import { useRef } from "react";
import "./service.css";
import { motion, useInView } from "framer-motion";
const variants = {
    initial: {
        x: -500,
        y: 10,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div className="services"
            variants={variants}
            initial="initial"
            animate="animate"
            whileInView="animate"
            ref={ref}
        // animate={isInView && "animate "} 
        >

            <motion.dev className="textContainer" variants={variants}>
                <p>
               I focus on helping your brand grow <br /> and move forward
                </p>
                <hr />
            </motion.dev>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.jpeg" alt="" />
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Busness.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Backend</h2>
                    <p>
                        I focus on building and the server-side components of web applications. They write code that handles tasks like data processing, authentication, and database management. I also create APIs that enable communication between the frontend and backend.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Frontend</h2>
                    <p>
                        I architects behind the visual of websites. Our primary responsibility lies in writing code using languages like HTML, CSS, and JavaScript to craft the layout, style, and functionality that users directly interact with. This involves ensuring that websites adapt seamlessly to different screen sizes and devices.
                    </p>
                    <button>Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Flutter</h2>
                    <p>

                        I specialize in using the Flutter framework to build cross-platform mobile applications. They utilize Dart programming language to create user interfaces, manage application state, handle user input, and interact with backend services.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div >
    );
};

export default Services;