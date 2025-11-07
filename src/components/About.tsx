import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I'm a passionate full-stack developer dedicated to building scalable, end-to-end solutions 
            integrated with AI and ML models. My expertise lies in designing systems that blend intelligent 
            automation with seamless user experiences, particularly in the healthcare technology domain. 
            I thrive on solving complex problems and transforming innovative ideas into impactful applications 
            that make a real difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
