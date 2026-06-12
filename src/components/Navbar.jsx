import { motion } from "framer-motion"

const fadeIn = {
    initial: { opacity:0, y:20 },
    animate: { opacity:1, y:0 },
    transition: { duration: 0.6 },

};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Navbar = () => {
    return (
        <motion.nav 
          className="navbar" 
          initial={{ y: -100 }} 
          animate={{ y:0 }}
          transition={{ duration: 0.6, ease: "easeOut"}}
        >
          <motion.div 
            className="logo" 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            > 
            <img src="/simonp-logo.png" alt="SimonP Logo" />
 
          </motion.div>

          <motion.ul
            className="nav-links"
            variants={staggerContainer}
            initial="initial"
            animate="animate" 
          >
            <motion.li variants={fadeIn} whileHover={{scale: 1.1}} whileTap={{sacle: 0.95}}>
                <a href="#home">Home</a>
            </motion.li>
            <motion.li variants={fadeIn} whileHover={{scale: 1.1}} whileTap={{sacle: 0.95}}>
                <a href="#projects">Projects</a>
            </motion.li>
            <motion.li variants={fadeIn} whileHover={{scale: 1.1}} whileTap={{sacle: 0.95}}>
                <a href="#contact">Contact</a>
            </motion.li>
          </motion.ul>
        </motion.nav>
    );
};