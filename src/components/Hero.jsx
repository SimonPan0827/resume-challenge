import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          <strong>Bachelor of Science (Computer Science)</strong>
          <br />
          <span>2023-2025 University of Melbourne</span>
        </li>

        <li>
          <strong>Machine learning (Exchange Program)</strong>
          <br />
          <span>July 2025 University College London</span>
        </li>
      </ul>
    ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
    <ul className="cert-list">
        <li>
        <div className="cert-row">
            <strong>AWS Certified Cloud Practitioner</strong>

            <a
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/02e6868cea6c49caa98134ffd0875fa8"
            target="_blank"
            rel="noreferrer"
            >
            View
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
        </li>

        <li>
        <div className="cert-row">
            <strong>AWS Certified Solutions Architect Associate</strong>

            <a
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/fef02cee269b49639772f22a7cd16c9a"
            target="_blank"
            rel="noreferrer"
            >
            View
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
        </div>
        </li>
    </ul>
    ),
  },
];

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

export const Hero = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div 
          className="hero-content" 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 🙋Hi there! I'm </span>
          </motion.div>
          <motion.h1 className="glitch" variants={fadeIn} whileHover={{scale: 1.1}}>
            SimonPan 
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeIn}> 
            Devops|Full Stack Developer|AWS
          </motion.h2>
          <motion.p className="hero-description" variants={fadeIn}>
                I am a graduate student and full-stack developer specializing in DevOps. 
                I enjoy building practical, reliable, and user-focused applications while focusing on deployment automation, 
                cloud infrastructure, and system reliability.          
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
                href="/Simon-Resume2026.pdf"
                download
                className="cta-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Resume
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </motion.a>
            <motion.a
                href="#contact"
                className="cta-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Contact Me
            </motion.a>
            <motion.div
              className="social-links"
              variants={staggerContainer }
            >
                <motion.a href="https://github.com/SimonPan0827" target="_blank">
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/baimin-pan-9b561332a/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </motion.a>
            </motion.div>
            </motion.div>

            <motion.div className="hero-tabs" variants={staggerContainer}>
            <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
            >
                Education
            </TabButton>

            <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
            >
                Certifications
            </TabButton>
            </motion.div>
            
            <motion.div className="hero-info-content">
            {TAB_DATA.find((item) => item.id === tab).content}
            </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container" 
          initial={{ opacity:0, x:50 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration: 0.8, delay:0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter   
                language="typescript"
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    padding: "2rem",
                    height: "100%",
                    borderRadius: "20px",
                    background: "rgba(30, 41, 59, 0.8)",
                    backdropFilter: "blur(10px)",
                }}>
                {`const aboutMe: DeveloperProfile = {
  codename: "SimonP",
  origin:"🎧 On the way between a vinyl record store and a terminal"
  role: "DevOps + Full Stack Developer",

  coreStack: ["React", "Next.js", "FastAPI", "Python", "AWS", "Linux"],
  devOpsPath: ["Docker", "Kubernetes", "CI/CD", "Bash scripting"],

  focus: [
    "containerization",
    "cloud infrastructure",
    "automation",
    "reliable deployment workflows",
  ],

  availability: "Available for hire now",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div 
            className="floating-card" 
            animate={{y: [0, -10, 0], rotate: [0, 2, 0]}} 
            transition={{duration: 4, repeat: Infinity, ease:"easeInOut"}}>
            <div className="card-content">
                <span className="card-icon">💻</span>
                <span className="card-text">Currently working on Aussie gig website</span>
            </div>

          </motion.div>
        
        </motion.div>
      </div>
    </motion.section>
  );
};