import { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "API Development",
        img: "/api1.jpeg" ,
        desc:  "They create RESTful or GraphQL APIs to facilitate communication between the frontend and backend components of web applications. Full stack developers design API endpoints, handle HTTP requests and responses, and ensure data integrity and security. ",
    },
   
    {
        id: 2,
        title: "Database Management",
        img: "/database.jpg",
        desc: "Full stack developers are proficient in database management systems (DBMS) such as MySQL, PostgreSQL, MongoDB, or Firebase. They design and optimize database schemas, write SQL queries, and ensure efficient data storage and retrieval.",
    },
    {
        id: 3,
        title: "Project Management and Collaboration",
        img: "/project.jpeg",
        desc: " Full stack developers often collaborate with designers, frontend developers, and other stakeholders to deliver projects on time and within budget. They may take on project management responsibilities, such as task prioritization, sprint planning, and progress tracking.",
    },
    {
        id: 4,
        title: "Deployment and DevOps",
        img: "/ops.png",
        desc: "They have knowledge of deployment tools and practices to deploy web applications to servers or cloud platforms like AWS, Azure, or Heroku. Full stack developers may also handle tasks related to continuous integration, automated testing, and deployment pipelines. ",
    },
    {
        id: 4,
        title: "Version Control",
        img: "/version.jpeg",
        desc: "Full stack developers are adept at using version control systems like Git to manage code repositories, track changes, and collaborate with other developers effectively. ",
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" className="img"/>
                    </div>
                    < motion.div className="textContainer"  style={{y}}>
                        <h2>{item.title}</h2>
                        <p >{item.desc}</p>
                        <button >See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef()
     
    const { scrollYProgress } = useScroll({
        target: ref, offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        
        
    })

    return (
        <div className="portfolio" ref={ref}>
            <div className="Progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="ProgressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};


export default Portfolio