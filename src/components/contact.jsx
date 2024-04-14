import "./contact.css";
import { motion } from "framer-motion"

const variants = {
  imitial: {
    y: 500,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      staggerChildren: 0.1,
    },
  }
}

const Contact = () => {
  return (
    <motion.div className="contact" variants={variants} initial="initial" animate="animate">
    <motion.div className="textContainer" variants={variants}>
      <motion.h1 variants={variants}>Let's work together</motion.h1>
      <motion.div className="item" variants={variants}>
        <h2>Mail</h2>
        <span>shemaalain10@gmail.com</span>
      </motion.div>
      <div className="item" variants={variants}>
        <h2>Address</h2>
        <span>Kigali/ Kacyiru</span>
      </div>
      <div className="item" variants={variants}>
        <h2>Phone</h2>
        <span>+250 781 216 497</span>
      </div>
    </motion.div>
    <motion.div className="formContainer" variants={variants}>
      <form>
        <input type="text" required placeholder="Name" />
        <input type="email" required placeholder="Email" />
        <textarea rows={8} placeholder="Message" />
        <button>Submit</button>
      </form>
    </motion.div>
  </motion.div>
  

  )
}

export default Contact;