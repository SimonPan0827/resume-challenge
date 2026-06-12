import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { useEffect, useState, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { motion } from "framer-motion"


function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [views, setViews] = useState(null)
  const hasFetched = useRef(false)

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    if (hasFetched.current) return;
    hasFetched.current = true;

    async function updateCounter() {
      try {
        const response = await fetch(
          "https://rdknj2xviq2ocqrncibewmzzem0fqcsj.lambda-url.us-east-1.on.aws/"
        );

        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
      }
    }

    updateCounter();

  },[]);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
    
    
      <Hero />
      <Projects />
      <Contact />


      <motion.footer 
        className='footer'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>
          {views !== null ? `Views: ${views}` : "Loading views..."}
        </p>

        <p> &copy; 2026 SimonPanResume. All rights reserved.</p>

      </motion.footer>
    </div>
  ) 
}

export default App
