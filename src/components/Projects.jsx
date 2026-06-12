import { motion } from "framer-motion"; 

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

export const Projects = () => {
  return (
  <motion.section 
    id="projects"
    className="projects"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    >
      <motion.h2 
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
    </motion.h2>
        <motion.div
          className="project-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="project-card"
            variants={fadeIn}
            whileHover={{ y: -10, transition: {duration: 0.2}}}
          >
            <motion.div 
                className="project-image" 
                style={{backgroundImage: "url('/projects/aussie-gig.png')"}}
                whileHover={{ scale: 1.05, transition: { duration: 0.2}}}
                />
                <h3> Aussie Gig Website</h3>
                <p>A web-based app shows all gigs in Australia, featuring timeline and exploring
                  page for user to browse. Collecting latest information from various ticket websites.
                </p>
                <div className="project-tech">
                    <span>Next.js</span>
                    <span>FastApi</span>
                    <span>Typescript</span>
                </div>
            </motion.div>
          <motion.div 
            className="project-card"
            variants={fadeIn}
            whileHover={{ y: -10, transition: {duration: 0.2}}}
          >
            <motion.div 
                className="project-image" 
                style={{backgroundImage: "url('/projects/resume-challenge.png')"}}
                whileHover={{ scale: 1.05, transition: { duration: 0.2}}}
            />
                <h3> Resume challenge</h3>
                <p>A cloud-based resume portfolio inspired by the AWS Cloud Resume Challenge, 
                    designed to practise real-world AWS deployment and serverless architecture.
                </p>
                <div className="project-tech">
                    <span>Next.js</span>
                    <span>FastApi</span>
                    <span>Typescript</span>
                </div>
            </motion.div>
          </motion.div>
    </motion.section>
  );
};